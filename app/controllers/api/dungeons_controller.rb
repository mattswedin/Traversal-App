require 'faker'

class Api::DungeonsController < ApplicationController
    
    skip_before_action :verify_authenticity_token

    def create
        @room = Room.new
        @room.name = Faker::Name.last_name
        enemy_load(@room).save!

        #dungeon creation
        @dungeon = Dungeon.new
        @dungeon.player_id = current_user.id
        @dungeon.name = "The " + Faker::Creature::Bird.adjective.capitalize() + " " + Faker::Creature::Animal.unique.name.capitalize() + " Dungeon"
        @dungeon.room_amount = 5 if current_user.level <= 30
        @dungeon.next_room_id = @room.id
        @dungeon.save!

        i = 1
        until i == @dungeon.room_amount       
            #creates next room
            @next_room = Room.new()
            @next_room.name = Faker::Name.last_name
            enemy_load(@next_room).save!

            @room.next_room_id = @next_room.id
            @room.save!

            @room = @next_room
            i += 1
        end

        @room.save!
    
        puts "I'm finished"

    end

    def enemy_load(room)
        number_of_enemies = rand(4)
        (0..number_of_enemies).each do |number|
            if number > 0
                @enemy = Enemy.new
                @enemy.name = Faker::Name.first_name
                @enemy.image = "Gargoyle_image.png"
                @enemy.hit_points = 5
                @enemy.enemy_type = "The " + Faker::Emotion.adjective.capitalize() + " " + "Gargoyle"
                @enemy.tagline = Faker::Hacker.say_something_smart
                @enemy.save!
                room.enemies.push(@enemy.id)
            end
        end
        return room
    end

    def show
        @dungeon = Dungeon.find_by(player_id: current_user[:id])
        render :show
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
        params.require(:dungeon).permit()
    end
end