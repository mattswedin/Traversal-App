import React, { useState } from "react"
import { useSelector } from "react-redux"

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

    const [state, SetState] = useState({
        room_amount: '',
        dungeon: ''
    })

    const updateDungeon = (key, value) => {
            SetState(prevProps => ({
                ...prevProps, [key]: value
            }))
    }
    

    const createEntireDungeon = () => {   
        const room_amount = dungeonRoomAmount(currentUser.level)
        const dungeon = dungeonBinaryTree(room_amount)

        updateDungeon('room_amount', room_amount)
        updateDungeon('dungeon', dungeon)
    }

    const dungeonBinaryTree = (roomAmount) => {
        const tree = {}
        const i = 0

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
            const enemyAmount = Math.floor(Math.random())
            const treasureAmount = Math.floor(Math.random())
            const leetAmount = Math.floor(Math.random())

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

        }

        return new Room(enemies, treasure, leet)
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