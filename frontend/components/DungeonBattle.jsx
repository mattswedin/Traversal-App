import React, { useState, useEffect } from 'react'

const DungeonBattle = ({enemies}) => {

    const [gameText, setGameText] = useState('')

    

    useEffect(() => {
        gameStart()
    }, [enemies])


    const gameStart = () => {

        switch (enemies.length) {
            case 1:
                setGameText(`The ${enemies[0].type} materialized in front of you!`)
                // dispatch(updateBattle(gameText))
                break;
            case 2:
                setGameText(`The ${enemies[0].type} & ${enemies[1].type} materialized in front of you!`)

                break;
            case 3:
                setGameText(`The ${enemies[0].type}, ${enemies[1].type}, & ${enemies[2].type} materialized in front of you!`)
                break;
            default:
                break;
        };

    }

    const [pick, setPick] = useState(false)

    const playerAttack = () => {

        if (enemies.length > 1){
            setPick(true)
            setGameText('Which enemy will you chose?')
        }
       
    }

    return gameText ? (
        <div>
            <div>
                {
                        enemies.map((enemy, i) => (
                                <div key={enemy.name} > 
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
            <h1>{gameText}</h1>
            <div>
                <button onClick={() => playerAttack()}>Attack</button>
                <button>Speak</button>
            </div>
            
        </div>

    ) : null
}

export default DungeonBattle