import * as RoomApiUtil from '../util/room_api_util'

export const RECEIVE_ROOM = "RECEIVE_ROOM";
export const RECEIVE_ROOM_ERRORS = "RECEIVE_ROOM_ERRORS"

export const receiveRoom = room => ({
    type: RECEIVE_ROOM,
    room
})

export const receiveRoomErrors = errors => ({
    type: RECEIVE_ROOM_ERRORS,
    errors

})

export const showRoom = roomId => dispatch => (
    RoomApiUtil.showRoom(roomId)
    .then((room) => {
        dispatch(receiveRoom(room))
    })
    .catch((err) => {
        dispatch(receiveRoomErrors(err.response.data))
    })
)

export const updateRoom = room => dispatch => (
    RoomApiUtil.showRoom(room)
    .then((room) => {
        dispatch(receiveRoom(room))
    })
    .catch((err) => {
        dispatch(receiveRoomErrors(err.response.data))
    })
)