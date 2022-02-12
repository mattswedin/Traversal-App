import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from "../actions/session_actions.js"

const sessionReducer = (oldState = {}, action) => {

    const initialState = {
        isAuthenticated: false,
        user: {}
    }
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return oldState;
    }
}

export default sessionReducer;