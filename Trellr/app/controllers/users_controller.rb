class UsersController < ApplicationController
  before_action :require_login, except: [:new, :create]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      redirect_to root_url
    else
      flash.now["errors"] = @user.errors.full_messages
      render :new
    end
  end

  # def show
  # end
  #
  # def edit
  # end
  #
  # def update
  #   if current_user.update(user_params)
  #     redirect_to user_url
  #   else
  #     flash.now["errors"] = @user.errors.full_messages
  #     render :edit
  #   end
  # end

  def destroy
    current_user.destroy!
    redirect_to root_url
  end
end
