class Api::ListsController < ApplicationController
  before_action :require_login

  def create
    @list = current_user.lists.new(list_params)
    if @list.save
      render json: @list
    else
      flash.now["errors"] = @list.errors.full_messages
      render json: @list, status: :unprocessable_entity
    end
  end

  def update
    @list = List.find(params[:id])
    if @list.update(list_params)
      render json: @list
    else
      flash.now["errors"] = @list.errors.full_messages
      render json: @list, status: :unprocessable_entity
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy!
    render json: @list
  end

  private
  def list_params
    params.require(:list).permit(:title, :board_id)
  end
end
