class Api::BattlesController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create
        @battle = Battle.new()
        @battle.player_id = current_user.id
        if @battle.save!
            render :show
        else
            render json: @battle.errors.full_messages, status: 422
        end
    end    

    def show
        @battle = Battle.find_by(id: params[:id])
        render :show
    end

    def index
        @battles = Battle.all
        render :index
    end

    def update
        @battle = Battle.find_by(id: params[:id])
        if @battle.update(battle_params)
            render :show
        else
            render json: @battle.errors.full_messages, status: 422
        end
    end

    private

    def battle_params
        params.require(:battle).permit(:choice, :game_text, :current_battle, enemies: [])
    end


end