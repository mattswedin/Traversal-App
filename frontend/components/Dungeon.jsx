import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { showDungeon, updateDungeon } from "../actions/dungeon_actions"
import { showBattle } from "../actions/battle_actions"
import { useParams } from "react-router"
import { useNavigate } from "react-router-dom";
import DungeonCode from "./DungeonCode";
import DungeonBattle from "./DungeonBattle";

const Dungeon = () => {
    const history = useNavigate()
    const dispatch = useDispatch()
    const id = useParams()
    const currentUser = useSelector(state => state.session.id)

    useEffect(() => {
        dispatch(showDungeon(id.dungeonId))
        dispatch(showBattle(currentUser.id))
    }, [])

    const dungeon = useSelector(state => {
        return state.entities.dungeon
    })

    const battle = useSelector(state => {
        return state.entities.battle
    })



    const traverse = (direction) => {
        let state;

        if (direction === "left"){
            state = {
                id: dungeon.id,
                current_room: dungeon.current_room.left
            }
        } else if (direction === "right") {
            state = {
                id: dungeon.id,
                current_room: dungeon.current_room.right
            }
        } else {
            state = {
                id: dungeon.id,
                current_room: dungeon.entire_dungeon
            }
            dispatch(updateDungeon(state))
            history('/');
        }

        dispatch(updateDungeon(state))
    }


    return dungeon.current_room && battle.enemies ? (
        <div>
            <h1>{dungeon.name}</h1>
            <h2>{dungeon.current_room.name}</h2>
            <br/>
            <h1>
                {
                    dungeon.current_room.leet[0] != "Empty" ? dungeon.current_room.leet.map(problem => (
                        problem 
                    )) : null
                }
            </h1>
            <div>
                {
                    dungeon.current_room.enemies[0] != "Empty" ? <DungeonBattle currentRoom = {dungeon.current_room}battleWorld={battle} enemyArray={dungeon.current_room.enemies} /> : null
                }
            </div>
            <h1>
                {
                    dungeon.current_room.treasure[0] != "Empty" ? dungeon.current_room.treasure.map(treas => (
                        treas 
                    )) : null
                }
            </h1>
            <div>
                {
                   dungeon.current_room.left ? (
                    <button onClick={() => traverse('left')}>Left</button>
                   ) : null
                   
                }
            </div>
            <div>
                {
                   dungeon.current_room.right ? (
                    <button onClick={() => traverse('right')}>Right</button>
                   ) : null  
                }
            </div>
             <div>
                {
                   !dungeon.current_room.right && !dungeon.current_room.left ? (
                    <button onClick={() => traverse('return')}>Go back</button>
                   ) : null
                }
            </div>
        </div>
    ) : (
        <h1>No Dungeon</h1>
    )

}

export default Dungeon