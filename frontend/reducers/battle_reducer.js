import { RECEIVE_BATTLE } from "../actions/battle_actions";

const battleReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_BATTLE:
            return nextState[action.battle.id] = action.battle.data
        default:
            return state;
    }
}

export default battleReducer;