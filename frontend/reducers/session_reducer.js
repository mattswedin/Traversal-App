import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from "../actions/session_actions.js"

const initialState = {
    isAuthenticated: false,
    user: {}
}

const sessionReducer = (state = initialState, action) => {

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return {
                isAuthenticated: false,
                user: undefined
             };
        default:
            return state;
    }
}

export default sessionReducer;