import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const signup = (user, token) => dispatch => {
    return SessionApiUtil.signup(user, token)
    .then((user) => {
        dispatch(receiveCurrentUser(user));
        dispatch(clearErrors());
    }) 
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
};


export const login = user => dispatch => (
    SessionApiUtil.login(user)
    .then((user) => {
        dispatch(receiveCurrentUser(user))
        dispatch(clearErrors())
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data))
    })
)

export const logout = () => dispatch => {
    SessionApiUtil.logout()
    .then(() => {
        dispatch(logoutCurrentUser())
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data))
    })
};

export const showUser = user => dispatch => (
        SessionApiUtil.showUser(user)
    .then((user) => {
        dispatch(receiveUser(user))
    })
)

export const updateUser = user => dispatch => (
    SessionApiUtil.updateUser(user)
    .then((user) => {
        dispatch(receiveUser(user))
    })
)



