import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { showDungeon, updateDungeon } from "../actions/dungeon_actions"
import { showBattle } from "../actions/battle_actions"
import { useParams } from "react-router"
import { useNavigate } from "react-router-dom";
import Room from "./Room"
import DungeonBattle from "./DungeonBattle";
import axios from "axios"

const Dungeon = () => {
    const history = useNavigate()
    const dispatch = useDispatch()
    const id = useParams()
    const currentUser = useSelector(state => state.session.id)

    useEffect(() => {
        dispatch(showDungeon(id.dungeonId))
    }, [])

    const dungeon = useSelector(state => {
        return state.entities.dungeon
    })

    return dungeon.name ? (
        <div>
            <h1>{dungeon.name}</h1>
            <div>
                <Room next_room_id={dungeon.next_room_id} currentUser={currentUser}/>
            </div>
        </div>
    ) : (
        null
    )

}

export default Dungeon