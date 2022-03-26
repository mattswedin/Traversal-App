import axios from "axios";
import React, { useEffect } from "react";
import regeneratorRuntime from "regenerator-runtime";
import { async } from "regenerator-runtime"

const Room = ({ next_room_id }) => {



    useEffect(() => {

        const getRoomAfterDungeon = async () => {
            const { data } = await axios.get(`/api/rooms/${next_room_id}`)

        }

        if (!user.current_room_id){
            getRoomAfterDungeon()
        } else {
            
        }

    }, [])

    return (
        <h1>{room.name}</h1>
    )

}

export default Room