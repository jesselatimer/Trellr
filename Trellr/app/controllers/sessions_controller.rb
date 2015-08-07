class SessionsController < ApplicationController
  before_action :require_login, only: :destroy

  def new
    render :new
  end

  def create
    username, password = user_params[:username], user_params[:password]
    user = User.find_by_credentials(username, password)
    if user
      log_in!(user)
      redirect_to root_url
    else
      flash.now["errors"] = ["Invalid Username or Password"]
      render :new
    end
  end

  def destroy
    log_out!
    redirect_to new_session_url
  end
end
