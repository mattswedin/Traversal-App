import { RECEIVE_DUNGEON } from "../actions/dungeon_actions";

const dungeonReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_DUNGEON:
            return nextState[action.dungeon.id] = action.dungeon.data
        default:
            return state
    }
}

export default dungeonReducer;