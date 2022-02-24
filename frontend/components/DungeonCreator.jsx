import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { createDungeon } from '../actions/dungeon_actions'

class Room {
    constructor(enemies, treasure, leet) {
        this.enemies = [ ...enemies ]
        this.treasure = [ ...treasure ]
        this.leet = [ ...leet ]
        this.left = null;
        this.right = null;
    }
}

const DungeonCreator = () => {
    const currentUser = useSelector(state => state.session.id)
    const dispatch = useDispatch()

    // const [state, setState] = useState({
    //     room_amount: '',
    //     dungeon: ''
    // })

    

    const createEntireDungeon = (e) => {  

        e.preventDefault()

        const roomAmount = dungeonRoomAmount(currentUser.level)
        const dungeonTree = dungeonBinaryTree(roomAmount)

        // setState({ ['room_amount']: roomAmount, ['dungeon']: dungeonTree  })

        const dungeon = {
            room_amount: roomAmount,
            dungeon: dungeonTree
        }
        
        dispatch(createDungeon(dungeon))
    }

    const dungeonBinaryTree = (roomAmount) => {
        const tree = {}
        let i = 0

        while (i < roomAmount){
            tree[i] = roomCreator(currentUser.level)
            i++
        }

        return tree;
    }

    const roomCreator = (level) => {

        const enemyVaultEasy = ['enemyA', 'enemyB', 'enemyC', 'enemyD']
        const treasureVaultEasy = ['treasureA', 'treasureB', 'treasureC', 'treasureD']
        const leetVaultEasy = ['two_sum', 'is_prime?', 'fizbiz', "fibonocci"]
        const enemies = [];
        const treasure = [];
        const leet = [];

        if (level < 30){
            const enemyAmount = Math.floor(Math.random() * 2)
            const treasureAmount = Math.floor(Math.random() * 2)
            const leetAmount = Math.floor(Math.random() * 2)

            //Random Enemies

            for (let i = 0; i < enemyAmount; i++){
                const pos = Math.floor(Math.random() * enemyVaultEasy.length)
                enemies.push(enemyVaultEasy[pos])
            }

            //Random Treasures

            for (let i = 0; i < treasureAmount; i++){
                const pos = Math.floor(Math.random() * treasureVaultEasy.length)
                treasure.push(treasureVaultEasy[pos])
            }

            //Random Leet

            for(let i = 0; i < leetAmount; i++){
                const pos = Math.floor(Math.random() * leetVaultEasy.length)
                leet.push(leetVaultEasy[pos])
            }

            return new Room(enemies, treasure, leet)

        }

        
    }

    const dungeonRoomAmount = (level) => {

        if (level < 30){
            return 5;
        } else {
            return Math.floor(level * .2)
        }
    }



    return (
        <button onClick={createEntireDungeon}>Explore New Dungeon</button>
    )

}

export default DungeonCreator