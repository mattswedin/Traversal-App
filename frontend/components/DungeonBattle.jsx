import React, { useState, useEffect } from 'react'
import { updateBattle } from '../actions/battle_actions'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const DungeonBattle = ({battleGlobal, currentDungeon, currentRoom, currentUser}) => {

    //BATTLE

    const dispatch = useDispatch()
    const [ currBatt, setCurrBatt ] = useState(battleGlobal.current_battle)
    const [ pick, setPick ] = useState(battleGlobal.choice)
    const [ gameText, setGameText ] = useState(battleGlobal.game_text)
    const { enemies } = currentRoom
    
    const battle = {
        id: battleGlobal.id,
        game_text: gameText,
        choice: pick,
        current_battle: currBatt,
    }

    //ENEMIES

    // const current_room = {
    //     enemies: currentRoom.enemies = {
            
    //     }
    // }

    // const dungeon = {
    //     id: currentDungeon.id,
    //     current_room: current_room,

    // }

    //BATTLE UPDATES

    useEffect(() => {
        if (!battleGlobal.current_battle){
            gameStart()
            setCurrBatt(true)
        }
    }, [enemies])

    useEffect(() => {
        dispatch(updateBattle(battle))
    }, [battle.game_text, battle.choice, battle.current_battle])


    ////////////////////////////////////////////////////////////////////////////


    const gameStart = () => {

        debugger
        switch (enemies.length) {
            case 1:
                setGameText(`${enemies[0].enemy_type} materialized in front of you!`)
            
                break;
            case 2:
                setGameText(`${enemies[0].enemy_type} & ${enemies[1].enemy_type} materialized in front of you!`)

                break;
            case 3:
                setGameText(`${enemies[0].enemy_type}, ${enemies[1].enemy_type}, & ${enemies[2].enemy_type} materialized in front of you!`)
                break;
            default:
                break;
        };

    }

    const playerBeforeAttack = () => {

        if (enemies.length > 1){
            setPick(true)
            setGameText('Which enemy will you chose?')
        } else {
            playerAttack(enemy)
        }
       
    }

    const playerAttack = (enemy) => {

        let newEnemy;
   
        setGameText(`You charged at ${enemy.name}, ${enemy.enemy_type}!`)
        
        if ((enemy.hit_points - currentUser.attack) <= 0){
            newEnemy = {
                enemy_type: enemy.enemy_type,
                hit_points: 0,
                image: enemy.image
            }
        } else {
            newEnemy = {
                enemy_type: enemy.enemy_type,
                hit_points: (enemy.hit_points - currentUser.attack),
                image: enemy.image
            }
        }
    
        return axios.patch(`/api/enemies/${enemy.id}`, newEnemy)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err)
        })
    }

    return currentRoom.enemies !== 'Empty' ? (
        <div>
            <div className='enemies'>
                {
                        currentRoom.enemies.map((enemy, i) => {
                              return !(enemy.hitPoints <= 0) ?  (  
                                <div key={enemy.name + i} className='enemy'> 
                                    <br/>
                                    <h4>{enemy.enemy_type}</h4>
                                    <h4>HitPoints: {enemy.hit_points}</h4>
                                    <br/>
                                    <img src={require(`../images/enemies/hash_gargoyle/${enemy.image}`).default} alt='cannot' />
                                    <br/>
                                    <div>
                                        {
                                            battleGlobal.choice ? (
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
            <h1>{battleGlobal.game_text}</h1>
            <div>
                <button onClick={() => playerBeforeAttack()}>Attack</button>
                <button>Speak</button>
            </div>
            
        </div>

    ) : null
}

export default DungeonBattle