import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { createBattle } from "../actions/battle_actions"
import { createDungeon, showAllDungeons } from '../actions/dungeon_actions'
import { updateUser } from '../actions/session_actions'
const { faker } = require('@faker-js/faker');
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime";


class Room {
    constructor(enemyAmount) {
        this.name = "The " + faker.name.lastName() + " Room"
        this.enemy_amount = enemyAmount
        this.left = null;
        this.right = null;
    }
}

//Component

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

        const roomAmount = dungeonRoomAmount()
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


    const roomCreator = () => {

        let enemyAmount;

        if(currentUser.level < 30){
            enemyAmount = Math.floor(Math.random() * 4)
        }

        // for (let i = 0; i < enemyAmount; i++) {
        //     axios.post('/api/enemies', enemyObject)
        //     .then(res => enemies.push(res.data))
        //     .catch(err => console.log(err))
        // }

        return new Room(enemyAmount);
        
    }


    //creates actualdungeon

    const dungeonBinaryTree = (roomAmount) => {
        const root = roomCreator()
        const current_node = root

        current_node.left = roomCreator()
        current_node.right = roomCreator()
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
            node.left = roomCreator()
            amount -= 1
            }

            if (!node.right && amount){
                node.right = roomCreator()
                amount -= 1
            }

        } else {
            if (!node.right && amount){
                node.right = roomCreator()
                amount -= 1
            }

            if (!node.left && amount){
                node.left = roomCreator()
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


    

    const dungeonRoomAmount = () => {

        if (currentUser.level < 30){
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