class SalesController < ApplicationController
  before_action :set_sale, only: [:show, :update, :destroy]

  # GET /sales
  def index
    @sales = Sale.all

    render json: @sales
  end

  # GET /sales/1
  def show
    render json: @sale
  end

  # POST /sales
  def create
    total = fetch_total_from_email(params)
    @sale = Sale.new(total: total)
    if @sale.save
      render json: @sale, status: :created, location: @sale
    else
      render json: @sale.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sales/1
  def update
    if @sale.update(sale_params)
      render json: @sale
    else
      render json: @sale.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sales/1
  def destroy
    @sale.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sale
      @sale = Sale.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def sale_params
      params.require(:sale).permit(:total)
    end

    def fetch_total_from_email(params)
      is_order_total = false
      total = nil
      document = Nokogiri::HTML(params[:body_html])
      document.search("p").each do |p|
        if is_order_total and p.content != ""
          return total = p.content
        end
        if p.content == "Order Total"
          is_order_total = true
        end
      end
    end
end
