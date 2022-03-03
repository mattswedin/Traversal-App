import * as BattleApiUtil from '../util/battle_api_util'

export const RECEIVE_BATTLE = 'RECEIVE_BATTLE'
export const RECEIVE_BATTLE_ERRORS = 'RECEIVE_BATTLE_ERRORS'

export const receieveBattleErrors = errors => ({
    type: RECEIVE_BATTLE_ERRORS,
    errors
})

export const receieveBattle = battle => ({
    type: RECEIVE_BATTLE,
    battle
})

export const updateBattle = battle => dispatch => (
    BattleApiUtil.updateBattle(battle)
    .then((battle) => {
        dispatch(receieveBattle(battle))
    })
    .catch(err => {
        dispatch(receieveBattleErrors(err.response.data))
    })
)

export const showBattle = battleId => dispatch => (
    BattleApiUtil.showBattle(battleId)
    .then((battle) => {
        dispatch(receieveBattle(battle))
    })
)