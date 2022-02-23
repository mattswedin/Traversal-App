class DungeonsController < ApplicationController
    def create
        @dungeon = Dungeon.new(dungeon_params)
        @dungeon.player_id = current_user.id
        if @dungeon.save!
        end
    end

    def show
        @dungeon = Dungeon.find_by(id: params[:id])
        render :show
    end

    def update
        @dungeon = Dungeon.find_by(id: params[:id])

        if @dungeon.update(patch_dungeon_params)
            render: show
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

    def dungeon_params
        params.require(:dungeon).permit(:room_amount, :current_room, :visited_rooms, :dungeon, :enemies, :treasure, :boss)
    end

end