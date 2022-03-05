import { RECEIVE_ALL_BATTLES, RECEIVE_BATTLE } from "../actions/battle_actions";

const battleReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_BATTLE:
            return nextState[action.battle.player_id] = action.battle.data
        case RECEIVE_ALL_BATTLES:
            return action.battles.data
        default:
            return state;
    }
}

export default battleReducer;