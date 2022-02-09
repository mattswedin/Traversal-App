import {
    RECEIVE_SESSION_ERRORS,
    CLEAR_ERRORS
} from "../actions/session_actions.js"

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState)

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return Object.assign([], oldState, action.errors);
        case CLEAR_ERRORS:
            return [];
        default:
            return oldState;
    }
};
    


export default sessionErrorsReducer;