class SampleRequestsController < ApplicationController
  before_action :set_sample_request, only: [:show, :update, :destroy]

  # GET /sample_requests
  def index
    @sample_requests = SampleRequest.all

    render json: @sample_requests
  end

  # GET /sample_requests/1
  def show
    render json: @sample_request
  end

  # POST /sample_requests
  def create
    @sample_request = SampleRequest.new(sample_request_params)

    if @sample_request.save
      render json: @sample_request, status: :created, location: @sample_request
    else
      render json: @sample_request.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sample_requests/1
  def update
    if @sample_request.update(sample_request_params)
      render json: @sample_request
    else
      render json: @sample_request.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sample_requests/1
  def destroy
    @sample_request.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sample_request
      @sample_request = SampleRequest.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def sample_request_params
      params.require(:sample_request).permit(:id)
    end
end
