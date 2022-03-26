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
    const [ room, setRoom ] = useState()

    useEffect(() => {
        dispatch(showDungeon(id.dungeonId))
        dispatch(showBattle(currentUser.id))
        const getRoom = async () => {
            const { data } = await axios.get(`/api/rooms/${dungeon.next_room_id}`)
            setRoom(data)
        }

        if (dungeon){
            getRoom()
        }

    }, [])

    const dungeon = useSelector(state => {
        return state.entities.dungeon
    })

    const battle = useSelector(state => {
        return state.entities.battle
    })



    return dungeon.name ? (
        <div>
            <h1>{dungeon.name}</h1>
            <div>
                <Room next_room_id={dungeon.next_room_id}/>
            </div>
        </div>
    ) : (
        <h1>No Dungeon</h1>
    )

}

export default Dungeon