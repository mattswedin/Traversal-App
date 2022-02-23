class DungeonsController < ApplicationController
    def create
        @dungeon = Dungeon.new()
        @dungeon.room_amount = dungeon_size(current_user.level)
        @dungeon.player_id = current_user.id
        @dungeon.enemies = [];
        @dungeon.treasure = [];
        @dungeon.boss = [];
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
        if @dungeon
            delete @dungeon
        end
    end

    def patch_dungeon_params
        params.require(:dungeon).permit(:current_room, :visited_rooms, :dungeon, :enemies, :treasure)
    end

    #methods

    def dungeon_size(level)
        if level <= 19
            return 3
        else
            return (level * .2).floor
        end
    end
end