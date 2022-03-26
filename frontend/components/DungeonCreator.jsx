import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createBattle } from "../actions/battle_actions"
import { showDungeon } from '../actions/dungeon_actions'
import { Link } from "react-router-dom"
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";
import { async } from "regenerator-runtime"


const DungeonCreator = ({ currentUser }) => {

    const [ currentDungeon, setCurrentDungeon ] = useState();

    useEffect(() => {

        const getDungeon = async () => {
           const { data } = await axios.get(`/api/dungeons/${currentUser.id}`)
           setCurrentDungeon(data)
        }
        getDungeon()

    }, [])

    const makeDungeon =  async () => {
        const { data } = await axios.post('/api/dungeons')
        setCurrentDungeon(data)
    }

    //DISPLAY

    return (
        <div>
            {
                currentDungeon ? <Link to={`/dungeon/${currentDungeon.id}`}>{currentDungeon.name}</Link>
                : <button onClick={() => makeDungeon()}>Find a new Dungeon</button>
            }
        </div>
    )

}

export default DungeonCreator