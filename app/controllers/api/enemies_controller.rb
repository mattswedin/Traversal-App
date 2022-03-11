require 'faker'

class Api::EnemiesController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create
        @enemy = Enemy.new(enemy_params)
        @enemy.name = Faker::Name.first_name
        @enemy.enemy_type = "The " + Faker::Emotion.adjective.capitalize() + " " + @enemy.enemy_type
        @enemy.tagline = Faker::Hacker.say_something_smart
        if @enemy.save
            render :show
        else
            render json: @enemy.errors.full_messages, status: 422 
        end
    end

    def show
        @enemy = Enemy.find_by(id: params[:id])
        render :show
    end

    def index
        @enemies = Enemy.all
        render :index
    end

    def update
        @enemy = Enemy.find_by(id: params[:id])

        if @enemy.update(enemy_params)
            render :show
        else
            render json: @enemy.errors.full_messages, status: 422
        end
    end

    def destroy
        @enemy = Enemy.find_by(id: params[:id])
        if @enemy.destroy
            render :show
        else
            render json: @enemy.errors.full_messages, status: 422
        end
    end

    private

    def enemy_params
        params.require(:enemy).permit(:enemy_type, :hit_points, :image)
    end

end
