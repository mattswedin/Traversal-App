import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { createBattle } from "../actions/battle_actions"
import { createDungeon } from '../actions/dungeon_actions'
const { faker } = require('@faker-js/faker');
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";



// class Room {
//     constructor(enemies) {
//         this.name = "The " + faker.name.lastName() + " Room"
//         this.enemies = enemies
//         this.left = null;
//         this.right = null;
//     }
// }

// //Component

const DungeonCreator = () => {

    const dispatch = useDispatch()
//     const [ roomsWithEnemies, setRoomsWithEnemies ] = useState({})
//     let roomAmount;

//     //roomAmount calculations
//     if (currentUser.level < 30){
//         roomAmount = 5;
//     } else {
//         roomAmount = Math.floor(level * .2)
//     }
//     //roomAmount calculations

//     useEffect(() => {
        
//         if (!currentDungeon) {
//             const enemyCreator = async (type) => {

//                 let enemy = {
//                     enemy_type: type,
//                     image: `${type}_image.png`,
//                     level: currentUser.level
//                 }

//                 try {
//                     const res = await axios.post('/api/enemies', { enemy });
//                     return res.data;
//                 } catch (err) {
//                     return console.log(err);
//                 }
//             }

//             for (let i = 0; i < roomAmount; i++) {
//                 let enemyAmount;
//                 let type;

//                 if (currentUser.level <= 20){
//                     enemyAmount = Math.floor(Math.random() * 4)
//                     type = 'Gargoyle'
//                 }

//                 for (let j = 0; j < enemyAmount; j++) {
//                         if (!(`room ${i}` in roomsWithEnemies)){
//                             roomsWithEnemies[`room ${i}`] = []
//                             setRoomsWithEnemies(roomsWithEnemies)
//                         }
//                         const enemy = enemyCreator(type)
//                         enemy.then(response => {
//                             console.log(response)
//                             roomsWithEnemies[`room ${i}`].push(response)
//                             setRoomsWithEnemies(roomsWithEnemies)
//                         })
                        
//                     }
                    
//             }
//         }

//     }, [])


//     const createRoom = (number) => {  

//         let room;

//         if ((`room ${number}` in roomsWithEnemies)){
//             let enemies = roomsWithEnemies[`room ${number}`]
//             room = new Room(enemies)
//         } else {
//             room = new Room('Empty')
//         }
        
//         return room
    
//     }

//     // //creates actualdungeon

//     const createLocalDungeon = () => {
    
//         const root = createRoom(0)
//         const current_node = root
//         let num = 0

//         current_node.left = createRoom(num += 1)
//         current_node.right = createRoom(num += 1)
//         roomAmount -= 3

//         let roomAmountLeft = Math.floor(roomAmount / 2)
//         let roomAmountRight = Math.floor(roomAmount / 2)

//         if (!(roomAmount % 2 === 0)){
//             const rando = Math.floor(Math.random() * 2)

//             if (rando === 0){
//                 roomAmountLeft += 1
//             } else {
//                 roomAmountRight += 1
//             }
//         }

//         createLocalDungeonHelper(current_node.right, roomAmountRight, num)
//         createLocalDungeonHelper(current_node.left, roomAmountLeft, num)

//         dungeonFinalStep(num, root);
//     }

//     const dungeonFinalStep = (num, root) => {
         
//         const dungeon = {
//             room_amount: num,
//             entire_dungeon: root,
//             current_room: root
//         }

//         dispatch(createDungeon(dungeon))
//         dispatch(createBattle())
//     }

//     const createLocalDungeonHelper = (node, amount, num) => {
    
//         if (amount <= 0) return;
//         let rando = Math.floor(Math.random() * 2)
        
//         if (rando === 0){

//             if (!node.left && amount){
//             node.left = createRoom(num += 1)
//             amount -= 1
//             }

//             if (!node.right && amount){
//                 node.right = createRoom(num += 1)
//                 amount -= 1
//             }

//         } else {

//             if (!node.right && amount){
//                 node.right = createRoom(num += 1)
//                 amount -= 1
//             }

//             if (!node.left && amount){
//                 node.left = createRoom(num += 1)
//                 amount -= 1
//             }
//         }

//         rando = Math.floor(Math.random() * 2)

//         if (rando === 0){
//             createLocalDungeonHelper(node.left, amount, num)
//         } else {
//             createLocalDungeonHelper(node.right, amount, num)
//         }
//     }

    const makeDungeon = () => {

        // let roomAmount;

        // if (currentUser.level < 30){
        //     roomAmount = 5;
        // } else {
        //     roomAmount = Math.floor(level * .2)
        // }

        dispatch(createDungeon())
    }
        

    //DISPLAY

    return (
        <button onClick={makeDungeon}>Find New Dungeon</button>
    )

}

export default DungeonCreator