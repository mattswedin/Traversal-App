import { RECEIVE_ALL_DUNGEONS, RECEIVE_DUNGEON } from "../actions/dungeon_actions";

const dungeonReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_DUNGEON:
            return nextState[action.dungeon.player_id] = action.dungeon.data
        case RECEIVE_ALL_DUNGEONS:
            return action.dungeons.data
        default:
            return state
    }
}

export default dungeonReducer;