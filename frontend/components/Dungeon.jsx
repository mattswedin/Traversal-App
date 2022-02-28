import React, { useEffect, useState } from "react"
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

    const traverse = (direction) => {
        console.log(`hi ${direction}`)
    }

    return dungeon.current_room ? (
        <div>
            <h1>THE DUNGEON!</h1>
            <h1>{dungeon.room_amount}</h1>
            <h1>{dungeon.current_room.enemies[0]}</h1>
            <h1>{dungeon.current_room.treasure[0]}</h1>
            <h1>{dungeon.current_room.leet[0]}</h1>
            <div>
                {
                   dungeon.current_room.left ? (
                    <button onClick={() => traverse('left')}>Left</button>
                   ) : (
                    <div></div>
                   )
                }
            </div>
            <div>
                {
                   dungeon.current_room.right ? (
                    <button onClick={() => traverse('right')}>Right</button>
                   ) : (
                    <div></div>
                   )
                }
            </div>
        </div>
    ) : (
        <h1>No Dungeon</h1>
    )

}

export default Dungeon