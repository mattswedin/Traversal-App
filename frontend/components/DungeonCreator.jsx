import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { createBattle } from "../actions/battle_actions"
import { createDungeon, showAllDungeons } from '../actions/dungeon_actions'
import { updateUser } from '../actions/session_actions'
const { faker } = require('@faker-js/faker');
import Enemy from "./util/EnemyCreator"


class Room {
    constructor(enemies, treasure, leet) {
        this.name = "The " + faker.name.lastName() + " Room"
        this.enemies = [ ...enemies ]
        this.treasure = [ ...treasure ]
        this.leet = [ ...leet ]
        this.left = null;
        this.right = null;
    }
}

const DungeonCreator = ({ currentUser }) => {
    const dispatch = useDispatch()
    const currentDungeon = useSelector(state => {
       return state.entities.dungeon[currentUser.id]
    })

    useEffect(() => {
        dispatch(showAllDungeons())
    }, [])


    //puts dungeon and roomAmount together

    const createEntireDungeon = (e) => {  

        e.preventDefault()

        const roomAmount = dungeonRoomAmount(currentUser.level)
        const dungeonTree = dungeonBinaryTree(roomAmount)
        

        const dungeon = {
            room_amount: roomAmount,
            entire_dungeon: dungeonTree,
            current_room: dungeonTree
        }

        const user = {
            id: currentUser.id,
            hasDungeon: true
        }
        
        dispatch(createDungeon(dungeon))
        dispatch(updateUser(user))
        dispatch(createBattle())
    
    }

    //creates actualdungeon

    const dungeonBinaryTree = (roomAmount) => {
        const root = roomCreator(currentUser.level)
        const current_node = root

        current_node.left = roomCreator(currentUser.level)
        current_node.right = roomCreator(currentUser.level)
        roomAmount -= 3

        let roomAmountLeft = Math.floor(roomAmount / 2)
        let roomAmountRight = Math.floor(roomAmount / 2)

        if (!(roomAmount % 2 === 0)){
            const rando = Math.floor(Math.random() * 2)

            if (rando === 0){
                roomAmountLeft += 1
            } else {
                roomAmountRight += 1
            }
        }

        dungeonBinaryTreeHelper(current_node.right, roomAmountRight)
        dungeonBinaryTreeHelper(current_node.left, roomAmountLeft)

        return root
    }

    const dungeonBinaryTreeHelper = (node, amount) => {
    
        if (amount === 0) return;
        let rando = Math.floor(Math.random() * 2)

        if (rando === 0){

            if (!node.left && amount){
            node.left = roomCreator(currentUser.level, amount)
            amount -= 1
            }

            if (!node.right && amount){
                node.right = roomCreator(currentUser.level, amount)
                amount -= 1
            }

        } else {
            if (!node.right && amount){
                node.right = roomCreator(currentUser.level, amount)
                amount -= 1
            }

            if (!node.left && amount){
                node.left = roomCreator(currentUser.level, amount)
                amount -= 1
            }
        }

        rando = Math.floor(Math.random() * 2)

        if (rando === 0){
            dungeonBinaryTreeHelper(node.left, amount)
        } else {
            dungeonBinaryTreeHelper(node.right, amount)
        }
    }

    //Creates a room. Difficulty based off level

    const roomCreator = (level, amount) => {

        const treasureVaultEasy = ['treasureA', 'treasureB', 'treasureC', 'treasureD']
        const leetVaultEasy = ['two_sum', 'is_prime?', 'fizbiz', "fibonocci"]
        const enemies = [];
        const treasure = [];
        const leet = [];

        //need to optimize for beyond 30

        if (level < 30){
            const enemyAmount = Math.floor(Math.random() * 3)
            const treasureAmount = Math.floor(Math.random() * 3)
            const leetAmount = Math.floor(Math.random() * 3)

            //Random Enemies

            if (enemyAmount === 0) enemies.push('Empty')

            for (let i = 0; i < enemyAmount; i++){
                let enemy = new Enemy(currentUser.level, 'Gargoyle', amount )
                enemies.push(enemy)
            }

            //Random Treasures

            if (treasureAmount === 0) treasure.push('Empty')

            for (let i = 0; i < treasureAmount; i++){
                const pos = Math.floor(Math.random() * treasureVaultEasy.length)
                treasure.push(treasureVaultEasy[pos])
            }

            //Random Leet

            if (leetAmount === 0) leet.push('Empty')

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

    //DISPLAY

    return !currentDungeon ? (
        <button onClick={createEntireDungeon}>Find New Dungeon</button>
    ) : (
        <Link to={`/dungeon/${currentDungeon.id}`}>{currentDungeon.name}</Link>
    )

}

export default DungeonCreator