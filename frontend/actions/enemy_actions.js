import * as EnemyApiUtil from '../util/enemy_api_util'
export const RECEIVE_ENEMY = 'RECEIVE_ENEMY'
export const RECEIVE_UPDATED_ENEMY = "RECEIVE_UPDATED_ENEMY"

export const receiveEnemy = (enemy) => ({
    type: RECEIVE_ENEMY,
    enemy
})

export const receiveUpdatedEnemy = (enemy) => ({
    type: RECEIVE_UPDATED_ENEMY,
    enemy
})

export const showEnemy = (enemyId) => dispatch => (
    EnemyApiUtil.showEnemy(enemyId)
    .then((enemy) => {
        dispatch(receiveEnemy(enemy))
    })
)

export const updateEnemy = (enemy) => dispatch => {
    return EnemyApiUtil.updateEnemy(enemy)
    .then(enemy => {
        dispatch(receiveUpdatedEnemy(enemy))
    })
}