require 'faker'

class RoomsController < ApplicationController
    
    def create
        @room = Room.new()
        @room.name = Faker::Name.last_name
        if @room.save
            render :show
        else
            render json: @room.errors.full_messages, status: 422
        end
    end

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