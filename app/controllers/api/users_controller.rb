class Api::UsersController < ApplicationController

    before_action :require_logged_in, except [:create]

    def create
        @user = User.new(user_params)
        if @user.save
           login!(@user)
           render :show 
        else
           render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def update
        @user = User.find_by(id: params[:id])

        if @user.update(user_update_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_update_params
        params.require(:user).permit(:level, :attack, :defense)
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end
end