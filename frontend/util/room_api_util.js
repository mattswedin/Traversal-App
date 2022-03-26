import axios from 'axios'

export const showRoom = ( roomId ) => (
    axios.get(`/api/room/${roomId}`)
)

export const updateRoom = ( room ) => {
    axios.patch(`/api/room/${room.id}`, { room })
}