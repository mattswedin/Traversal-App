import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { showDungeon, updateDungeon } from "../actions/dungeon_actions"
import { useParams } from "react-router"
import { useNavigate } from "react-router-dom";
import DungeonCode from "./DungeonCode";

const Dungeon = () => {
    const history = useNavigate()
    const dispatch = useDispatch()
    const id = useParams()

    useEffect(() => {
        dispatch(showDungeon(id.dungeonId))
    }, [])

    const dungeon = useSelector(state => {
        return state.entities.dungeon
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


    return dungeon.current_room ? (
        <div>
            <h1>{dungeon.name}</h1>
            <h2>{dungeon.current_room.name}</h2>
            <br/>
            <h1>
                {
                    dungeon.current_room.leet.map(problem => (
                        problem 
                    ))
                }
            </h1>
            <h1>
                {
                    dungeon.current_room.enemies.map(enemy => (
                        enemy 
                    ))
                }
            </h1>
            <h1>
                {
                    dungeon.current_room.treasure.map(treas => (
                        treas 
                    ))
                }
            </h1>
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
             <div>
                {
                   !dungeon.current_room.right && !dungeon.current_room.left ? (
                    <button onClick={() => traverse('return')}>Go back</button>
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