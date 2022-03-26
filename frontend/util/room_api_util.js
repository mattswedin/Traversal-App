import axios from 'axios'

export const showRoom = ( roomId ) => (
    axios.get(`/api/rooms/${roomId}`)
)

export const updateRoom = ( room ) => {
    axios.patch(`/api/rooms/${room.id}`, { room })
}