import axios from "axios";


export const showEnemy = (enemyId) => {
    axios.get(`/api/enemies/${enemyId}`)
}

export const updateEnemy = (enemy) => {
    axios.patch(`/api/enemies/${enemy.id}`, { enemy })
}