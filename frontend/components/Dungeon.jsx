import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { showDungeon } from "../actions/dungeon_actions"
import { useParams } from "react-router"



const Dungeon = () => {

    const dispatch = useDispatch()
    const id = useParams()

    useEffect(() => {
        dispatch(showDungeon(id.dungeonId))
    }, [])

    const dungeon = useSelector(state => {
        return state.entities.dungeon
    })

    const traverse = () => {
        
    }


    return dungeon.entireDungeon ? (
        <div>
            <h1>THE DUNGEON!</h1>
            <h1>{dungeon.room_amount}</h1>
            <h1>{dungeon.entireDungeon.enemies[0]}</h1>
            <h1>{dungeon.entireDungeon.treasure[0]}</h1>
            <h1>{dungeon.entireDungeon.leet[0]}</h1>
        </div>
    ) : (
        <h1>No Dungeon</h1>
    )

}

export default Dungeon