import React, { useState, useEffect } from 'react'
import { updateBattle } from '../actions/battle_actions'
import { useDispatch } from 'react-redux'

const DungeonBattle = ({battleWorld, enemyArray, currentRoom}) => {
    const dispatch = useDispatch()
    const [gameText, setGameText] = useState('Empty')

    let battle = {
        id: battleWorld.id,
        enemies: battleWorld.enemies.push(...enemyArray),
        game_text: gameText
    }

    useEffect(() => {
        dispatch(updateBattle(battle))
    }, [battle.enemies, battle.game_text])

    useEffect(() => {
        gameStart()
    }, [currentRoom])


    const gameStart = () => {

        switch (battleWorld.enemies.length) {
            case 1:
                setGameText(`The ${battleWorld.enemies[0].type} materialized in front of you!`)
                // dispatch(updateBattle(gameText))
                break;
            case 2:
                setGameText(`The ${battleWorld.enemies[0].type} & ${battleWorld.enemies[1].type} materialized in front of you!`)

                break;
            case 3:
                setGameText(`The ${battleWorld.enemies[0].type}, ${battleWorld.enemies[1].type}, & ${battleWorld.enemies[2].type} materialized in front of you!`)
                break;
            default:
                break;
        };

    }

    const [pick, setPick] = useState(false)

    const playerAttack = () => {

        if (battleWorld.enemies.length > 1){
            setPick(true)
            setGameText('Which enemy will you chose?')
        }
       
    }

    return gameText ? (
        <div>
            <div>
                {
                        battleWorld.enemies.map((enemy, i) => (
                                <div key={enemy.name + i} > 
                                    <br/>
                                    <h4>The {enemy.type}</h4>
                                    <br/>
                                    <div>
                                        {
                                            pick ? (
                                                <button>{enemy.name}</button>
                                            ) : null
                                        }
                                    </div>
                                </div>                    
                            ))
                }
            </div>
            <h1>{battleWorld.game_text}</h1>
            <div>
                <button onClick={() => playerAttack()}>Attack</button>
                <button>Speak</button>
            </div>
            
        </div>

    ) : null
}

export default DungeonBattle