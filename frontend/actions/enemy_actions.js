import * as EnemyApiUtil from '../util/enemy_api_util'
export const RECEIVE_ENEMY = 'RECEIVE_ENEMY'
export const RECEIVE_UPDATED_ENEMY = "RECEIVE_UPDATED_ENEMY"
export const DESTROY_ENEMY = "DESTROY_ENEMY"

export const receiveEnemy = (enemy) => ({
    type: RECEIVE_ENEMY,
    enemy
})

export const receiveUpdatedEnemy = (enemy) => ({
    type: RECEIVE_UPDATED_ENEMY,
    enemy
})

export const removeEnemy = (enemyId) => ({
    type: DESTROY_ENEMY,
    enemyId
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

export const destroyEnemy = (enemyId) => dispatch => (
    EnemyApiUtil.destroyEnemy(enemyId)
    .then((enemy) => {
        dispatch(removeEnemy(enemy))
    })
)