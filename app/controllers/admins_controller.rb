class AdminsController < ApplicationController
  before_action :set_admin, only: [:show, :update]
  before_action :authorize_request, only: :update

  # GET /admins
  def index
    @admins = Admin.all

    render json: @admins
  end

  # GET /admins/1
  def show
    render json: @admin
  end

  # POST /admins
  def create
    @admin = Admin.new(admin_params)
    
    if @admin.save
      @token = encode({id: @admin.id})
      render json: {
        admin: @admin.attributes.except("password_digest"),
        token: @token
        }, status: :created
    else
      render json: @admin.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /admins/1
  def update
    if @admin.update(admin_params)
      render json: @admin.attributes.except("password_digest")
    else
      render json: @admin.errors, status: :unprocessable_entity
    end
  end

  # # DELETE /admins/1
  # def destroy
  #   @admin.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin
      @admin = Admin.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def admin_params
      params.require(:admin).permit(:username, :password, :full_name, :email, :linkedin, :phone)
    end
end
