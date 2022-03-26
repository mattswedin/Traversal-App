import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import regeneratorRuntime from "regenerator-runtime";
import { async } from "regenerator-runtime"
import { updateUser } from "../actions/session_actions";
import { showRoom } from "../actions/room_actions";


const Room = ({ next_room_id, currentUser }) => {
    const dispatch = useDispatch()
    const room = useSelector(state => state.entities.room)

    useEffect(() => {

        const getRoomAfterDungeon = async () => {
            const { data } = await axios.get(`/api/rooms/${next_room_id}`)
            const user = {
                id: currentUser.id,
                current_room_id: data.id
            }
            dispatch(updateUser(user))
            dispatch(showRoom(user.current_room_id));
        }

        if (!currentUser.current_room_id){
            getRoomAfterDungeon()
        }

    }, [])

    useEffect(() => {
        if (currentUser.current_room_id) {
            dispatch(showRoom(currentUser.current_room_id));
        }
    }, [currentUser.current_room_id])

    

    return room.name ? (
        <h1>The {room.name} Room</h1>
    ) : null

}

export default Room