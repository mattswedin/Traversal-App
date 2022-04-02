import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import regeneratorRuntime from "regenerator-runtime";
import { async } from "regenerator-runtime"
import { updateUser } from "../actions/session_actions";
import { showRoom } from "../actions/room_actions";
import { showEnemy } from "../actions/enemy_actions";
import DungeonBattle from "./DungeonBattle";
import { createBattle, showBattle } from "../actions/battle_actions";


const Room = ({ next_room_id, currentUser }) => {
    const dispatch = useDispatch()
    const room = useSelector(state => state.entities.room)
    const enemies = useSelector(state => state.entities.enemy.enemies)
    const battle = useSelector(state => state.entities.battle)

    useEffect(() => {

        const getRoomAfterDungeon = async () => {
            const { data } = await axios.get(`/api/rooms/${next_room_id}`)
            const user = {
                id: currentUser.id,
                current_room_id: data.id
            }

            dispatch(updateUser(user))
            dispatch(showRoom(user.current_room_id));
            dispatch(createBattle())
            dispatch(showBattle(currentUser.id))

        }

        if (!currentUser.current_room_id){
            getRoomAfterDungeon()
        }

    }, [])

    useEffect(() => {
        if (room.enemies){
            room.enemies.forEach((enemyId) => {
                dispatch(showEnemy(parseInt(enemyId)))
            })
                
        }
    }, [room.enemies, showRoom])

    useEffect(() => {
        if (currentUser.current_room_id) {
            dispatch(showRoom(currentUser.current_room_id));
            dispatch(showBattle(currentUser.id))
        }
    }, [currentUser.current_room_id, updateUser, traverse])

    const traverse = () => {

        const user = {
            id: currentUser.id,
            current_room_id: room.next_room_id
        }

        dispatch(updateUser(user))
        dispatch(showRoom(currentUser.current_room_id));

    }

    return room.name && battle.id && enemies ? (
        <div>
            <div>
                <h1>The {room.name} Room</h1>
                <DungeonBattle 
                currentRoom={room} 
                currentBattle={battle} 
                currentEnemies={enemies}
                currentUser={currentUser}
                />
            </div>
        </div>
        
    ) : null

}

export default Room