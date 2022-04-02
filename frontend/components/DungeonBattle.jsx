import React, { useState, useEffect } from 'react'
import { updateBattle } from '../actions/battle_actions'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { updateEnemy, destroyEnemy } from '../actions/enemy_actions'
import { updateRoom } from '../actions/room_actions'
import Room from './Room'

const DungeonBattle = ({currentRoom, currentUser, currentBattle, currentEnemies}) => {

    //BATTLE

    const dispatch = useDispatch()
    const [ currBatt, setCurrBatt ] = useState(currentBattle.current_battle)
    const [ pick, setPick ] = useState(currentBattle.choice)
    const [ gameText, setGameText ] = useState(currentBattle.game_text)
    
    const battle = {
        id: currentBattle.id,
        game_text: gameText,
        choice: pick,
        current_battle: currBatt,
    }

    //BATTLE UPDATES

    useEffect(() => {
        if (!currentBattle.current_battle){
            gameStart()
            setCurrBatt(true)
        }
    }, [currentBattle.current_battle])

    useEffect(() => {
        dispatch(updateBattle(battle))
    }, [battle.game_text, battle.choice, battle.current_battle])


    ////////////////////////////////////////////////////////////////////////////


    const gameStart = () => {
        debugger

        switch (currentEnemies.length) {
            case 1:
                setGameText(`${currentEnemies[0].enemy_type} materialized in front of you!`)
                break;
            case 2:
                setGameText(`${currentEnemies[0].enemy_type} & ${currentEnemies[1].enemy_type} materialized in front of you!`)

                break;
            case 3:
                setGameText(`${currentEnemies[0].enemy_type}, ${currentEnemies[1].enemy_type}, & ${currentEnemies[2].enemy_type} materialized in front of you!`)
                break;
            default:
                break;
        };

    }

    const playerBeforeAttack = () => {

        if (currentEnemies.length > 1){
            setPick(true)
            setGameText('Which enemy will you chose?')
        } else {
            playerAttack(currentEnemies[0])
        }
       
    }

    const playerAttack = (enemy) => {

        let damagedEnemy;
   
        setGameText(`You charged at ${enemy.name}, ${enemy.enemy_type}!`)
        
        if ((enemy.hit_points - currentUser.attack) <= 0){
            damagedEnemy = {
                id: enemy.id,
                enemy_type: enemy.enemy_type,
                hit_points: 0,
                image: enemy.image
            }
            setGameText(`You did ${currentUser.attack} damage!`)
            setTimeout(() => {
                setGameText(`You destroyed ${enemy.name}!`)
                const newRoom = {
                    id: currentRoom.id,
                    enemies: currentRoom.enemies.filter(enemy => {
                        if (!(enemy.hit_points <= 0)){
                            return enemy
                        }
                    })
                }

                dispatch(updateRoom(newRoom))
                dispatch(updateEnemy(damagedEnemy))
                dispatch(destroyEnemy(enemy.id))
                
            }, 300);
        } else {
            damagedEnemy = {
                id: enemy.id,
                enemy_type: enemy.enemy_type,
                hit_points: (enemy.hit_points - currentUser.attack),
                image: enemy.image
            }
            setGameText(`You did ${currentUser.attack} damage!`)
            dispatch(updateEnemy(damagedEnemy))
        }

        
    
    }

    return currentEnemies.length > 0 ? (
        <div>
            <div className='enemies'>
                {
                       currentEnemies.map((enemy, i) => {
                              return enemy.hit_points > 0 ? (  
                                <div key={enemy.name + i} className='enemy'> 
                                    <br/>
                                    <h4>{enemy.enemy_type}</h4>
                                    <h4>HitPoints: {enemy.hit_points}</h4>
                                    <br/>
                                    <img src={require(`../images/enemies/hash_gargoyle/${enemy.image}`).default} alt='cannot' />
                                    <br/>
                                    <div>
                                        {
                                            currentBattle.choice ? (
                                                <button onClick={() => playerAttack(enemy)}>{enemy.name}</button>
                                            ) : null
                                        }
                                    </div>
                                    <br/>
                                </div>               
                            ) : null
                        })
                }
            </div>
            <h1>{currentBattle.game_text}</h1>
            <div>
                <button onClick={() => playerBeforeAttack()}>Attack</button>
                <button>Speak</button>
            </div>

            
        </div>

    ) : null
}

export default DungeonBattle