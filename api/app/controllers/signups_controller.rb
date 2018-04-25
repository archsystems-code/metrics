class SignupsController < ApplicationController
  before_action :set_signup, only: [:show, :update, :destroy]

  # GET /signups
  def index
    @signups = Signup.all

    render json: @signups
  end

  # GET /signups/1
  def show
    render json: @signup
  end

  # POST /signups
  def create
    @signup = Signup.new(signup_params)

    if @signup.save
      render json: @signup, status: :created, location: @signup
    else
      render json: @signup.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /signups/1
  def update
    if @signup.update(signup_params)
      render json: @signup
    else
      render json: @signup.errors, status: :unprocessable_entity
    end
  end

  # DELETE /signups/1
  def destroy
    @signup.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_signup
      @signup = Signup.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def signup_params
      params.fetch(:signup, {})
    end
end
