import * as EnemyApiUtil from '../util/enemy_api_util'
export const RECEIVE_ENEMY = 'RECEIVE_ENEMY'

export const receiveEnemy = (enemy) => ({
    type: RECEIVE_ENEMY,
    enemy
})

export const showEnemy = (enemyId) => dispatch => {
    return EnemyApiUtil.showEnemy(enemyId)
    .then((enemy) => {
        dispatch(receiveEnemy(enemy))
    })
}

export const updateEnemy = (enemy) => dispatch => {
    return EnemyApiUtil.updateEnemy(enemy)
    .then(enemy => {
        dispatch(receiveEnemy(enemy))
    })
}