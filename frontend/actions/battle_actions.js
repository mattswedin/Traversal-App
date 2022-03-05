import * as BattleApiUtil from '../util/battle_api_util'

export const RECEIVE_BATTLE = 'RECEIVE_BATTLE'
export const RECEIVE_ALL_BATTLES = 'RECEIVE_ALL_BATTLES'
export const RECEIVE_BATTLE_ERRORS = 'RECEIVE_BATTLE_ERRORS'

export const receieveBattleErrors = errors => ({
    type: RECEIVE_BATTLE_ERRORS,
    errors
})

export const receieveBattle = battle => ({
    type: RECEIVE_BATTLE,
    battle
})

export const receieveAllBattles = battles => ({
    type: RECEIVE_ALL_BATTLES,
    battles
})

export const createBattle = battle => dispatch => (
    BattleApiUtil.createBattle(battle)
    .then((battle) => {
        dispatch(receieveBattle(battle))
    })
    .catch((err) => {
        dispatch(receieveBattleErrors(err))
    })
)

export const updateBattle = battle => dispatch => (
    BattleApiUtil.updateBattle(battle)
    .then((battle) => {
        dispatch(receieveBattle(battle))
    })
    .catch(err => {
        dispatch(receieveBattleErrors(err))
    })
)

export const showBattle = battleId => dispatch => (
    BattleApiUtil.showBattle(battleId)
    .then((battle) => {
        dispatch(receieveBattle(battle))
    })
)

export const showAllBattles = () => dispatch => (
    BattleApiUtil.showAllBattles()
    .then((battles) => {
        dispatch(receieveAllBattles(battles))
    })
)