require 'faker'

class Api::DungeonsController < ApplicationController
    
    skip_before_action :verify_authenticity_token

    def create
        @dungeon = Dungeon.new(dungeon_params)
        @dungeon.player_id = current_user.id
        @dungeon.name = "The " + Faker::Creature::Bird.adjective.capitalize() + " " + Faker::Creature::Animal.unique.name.capitalize() + " Dungeon"
        @dungeon.room_amount = current_user.level
        @dungon.make_rooms(@dungeon.room_amount)
        if @dungeon.save!
            render "api/dungeons/show"
        else
            render json: @dungeon.errors.full_messages, status: 422
        end
    end

    def show
        @dungeon = Dungeon.find_by(id: params[:id])
        render :show
    end

    def index
        @dungeons = Dungeon.all
        render :index
    end

    def update
        @dungeon = Dungeon.find_by(id: params[:id])

        if @dungeon.update(dungeon_params)
            render :show
        else
            render json: @dungeon.errors.full_messages, status: 422
        end

    end

    def destroy
        @dungeon = Dungeon.find_by(id: params[:id])
        if @dungeon.destroy
            render :show
        else
            render json: @dungeon.errors.full_messages, status: 422
        end
    end

    private

    def dungeon_params
        params.require(:dungeon).permit(:room_amount)
    end

end