import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from "../actions/session_actions.js"


const sessionReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.data };
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export default sessionReducer;