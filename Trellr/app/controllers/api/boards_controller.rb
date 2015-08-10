class Api::BoardsController < ApplicationController
  before_action :require_login

  def index
    @boards = current_user.boards
    render json: @boards
  end

  def show
    @board = current_user.boards.find(params[:id])
    render :board_show
  end

  def create
    @board = current_user.boards.new(board_params)
    if @board.save
      render json: @board
    else
      flash.now["errors"] = @board.errors.full_messages
      render json: @board, status: :unprocessable_entity
    end
  end

  def update
    @board = Board.find(params[:id])
    if @board.update(board_params)
      render json: @board
    else
      flash.now["errors"] = @board.errors.full_messages
      render json: @board, status: :unprocessable_entity
    end
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy!
    render json: @board
  end

  private
  def board_params
    params.require(:board).permit(:title, :user_id)
  end
end
