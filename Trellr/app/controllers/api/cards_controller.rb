class Api::CardsController < ApplicationController
  before_action :require_login

  def create
    @card = current_user.cards.new(card_params)
    if @card.save
      render json: @card
    else
      flash.now["errors"] = @card.errors.full_messages
      render json: @card, status: :unprocessable_entity
    end
  end

  def update
    @card = Card.find(params[:id])
    if @card.update(card_params)
      render json: @card
    else
      flash.now["errors"] = @card.errors.full_messages
      render json: @card, status: :unprocessable_entity
    end
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy!
    render json: @card
  end

  def show
    @card = current_user.cards.find(params[:id])
    render json: @card
  end

  private
  def card_params
    params.require(:card).permit(:title, :list_id)
  end
end
