import { RECEIVE_ROOM } from "../actions/room_actions";

const roomReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ROOM:
            return nextState[action.room.id] = action.room.data
        default:
            return state
    }
}

export default roomReducer;