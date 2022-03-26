require 'faker'

class Api::RoomsController < ApplicationController

    skip_before_action :verify_authenticity_token
    
    def show
        @room = Room.find_by(id: params[:id])
        render :show
    end

    def destroy
        @room = Room.find_by(id: params[:id])
        if @room.destroy
            render :show
        else
            render json: @room.errors.full_messahes, status: 422
        end
    end

end