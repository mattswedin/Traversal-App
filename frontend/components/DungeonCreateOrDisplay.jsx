import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Dungeon from "./Dungeon"
import DungeonCreator from "./DungeonCreator"
import { showAllDungeons, showDungeon } from "../actions/dungeon_actions"
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
       <DungeonCreator currentUser={currentUser}/>
    ) : (
       <Link to={`/dungeon/${currentDungeon.id}`}>{currentDungeon.name}</Link>
    )
}

export default DungeonCreatorOrDisplay