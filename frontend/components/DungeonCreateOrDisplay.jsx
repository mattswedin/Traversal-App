import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import DungeonCreator from "./DungeonCreator"
import { showAllDungeons } from "../actions/dungeon_actions"
import { Link } from "react-router-dom"

const DungeonCreatorOrDisplay = ({ currentUser }) => {

    const dispatch = useDispatch()
    const currentDungeon = useSelector(state => {
    return state.entities.dungeon[currentUser.id]
    })
    useEffect(() => {
        dispatch(showAllDungeons())
    }, [])

    return !currentDungeon ? (
       <DungeonCreator currentUser={currentUser} currentDungeon={currentDungeon} />
    ) : (
       <Link to={`/dungeon/${currentDungeon.id}`}>{currentDungeon.name}</Link>
    )
}

export default DungeonCreatorOrDisplay