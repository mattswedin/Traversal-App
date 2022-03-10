import React, { useState, useEffect } from 'react'
import { updateBattle } from '../actions/battle_actions'
import { useDispatch } from 'react-redux'

const DungeonBattle = ({battleWorld, enemyArray, currentRoom, currentUser}) => {

    //BATTLE

    const dispatch = useDispatch()
    const [currBatt, setCurrBatt] = useState(battleWorld.current_battle)
    const [pick, setPick] = useState(battleWorld.choice)
    const [gameText, setGameText] = useState(battleWorld.game_text)
    
    let battle = {
        id: battleWorld.id,
        enemies: battleWorld.enemies.push(...enemyArray),
        game_text: gameText,
        choice: pick,
        current_battle: currBatt,
    }

    //ENEMIES -  must figure a dry optimization

    const [enemyOneLife, setEnemyOneLife] = useState(battleWorld.enemies[0].hitPoints)

    //UPDATES

    useEffect(() => {
        dispatch(updateBattle(battle))
    }, [battle.enemies, battle.game_text, battle.choice, battle.current_battle])

    useEffect(() => {
        if (!battleWorld.current_battle){
            gameStart()
            setCurrBatt(true)
        }
        
    }, [currentRoom])

    ////////////////////////////////////////////////////////////////////////////


    const gameStart = () => {


        switch (battleWorld.enemies.length) {
            case 1:
                setGameText(`The ${battleWorld.enemies[0].type} materialized in front of you!`)
            
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

    const playerBeforeAttack = () => {

        if (battleWorld.enemies.length > 1){
            setPick(true)
            setGameText('Which enemy will you chose?')
        } else {
            playerAttack(battleWorld.enemies[0])
        }
       
    }

    const playerAttack = (enemy) => {
   
        setGameText(`You charged at ${enemy.name}, the ${enemy.type}!`)
        debugger
        if ((enemy.hitPoints - currentUser.attack) <= 0){
            if (enemy === battleWorld.enemies[0]){
                setEnemyOneLife(0)
            }
        } else {
            
        }
        
    }

    return gameText ? (
        <div>
            <div className='enemies'>
                {
                        battleWorld.enemies.map((enemy, i) => {
                              return !(enemy.hitPoints <= 0) ?  (  
                                <div key={enemy.name + i} className='enemy'> 
                                    <br/>
                                    <h4>The {enemy.type}</h4>
                                    <h4>HitPoints: {enemy.hitPoints}</h4>
                                    <br/>
                                    <img src={require(`../images/enemies/hash_gargoyle/${enemy.idleImage}`).default} alt='cannot' />
                                    <br/>
                                    <div>
                                        {
                                            battleWorld.choice ? (
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
            <h1>{battleWorld.game_text}</h1>
            <div>
                <button onClick={() => playerBeforeAttack()}>Attack</button>
                <button>Speak</button>
            </div>
            
        </div>

    ) : null
}

export default DungeonBattle