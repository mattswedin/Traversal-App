class Api::DungeonsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create
        @dungeon = Dungeon.new(dungeon_params)
        @dungeon.player_id = current_user.id
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
        params.require(:dungeon).permit(:room_amount, :entire_dungeon => {}, :current_room => {} )
    end

end