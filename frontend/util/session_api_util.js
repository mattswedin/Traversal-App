import axios from 'axios';


//session

export const login = user => {
    return axios.post('/api/session', user)
}

export const logout = () => {
    return axios.delete('/api/session')
}

//user

export const signup = (user) => {
    return axios.post('/api/users', { user })
}

export const updateUser = user => {
    return axios.patch(`/api/users/${user.id}`, user)
}

export const showUser = user => {
    return axios.get(`/api/users/${user.id}`)
}