class AuthenticationController < ApplicationController
  skip_before_action :authorize_request, only: :authenticate

  def authenticate
    auth_token =
      AuthenticateUser.new(auth_params[:email], auth_params[:password]).call
    user = User.find_by(email: params[:email])
    json_response(auth_token: auth_token, user_id: user.id)
  end

  private

  # this is also for the demo
  def auth_params
    params.permit(:email, :password)
  end
end
