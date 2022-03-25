class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception
  # protect_from_forgery with: :null_session

  helper_method :current_user, :logged_in?

  private

  #DUNGEON CREATION

  def make_rooms(amount)
    @dungeon = Dungeon.find_by(player_id: current_user[:id])
    @room = Room.new()
    
    @dungeon.next_room_id = @room.id

    i = 1

    until i == amount
      @next_room = Room.new()
      @room.next_room_id = @next_room.id
      @room = @next_room
      i += 1
    end
  
    puts "I'm finished"

  end

  #USER AUTH

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

end
