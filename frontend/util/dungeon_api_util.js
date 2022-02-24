import axios from 'axios'

export const createDungeon = dungeon => (
    axios.post('/api/dungeon', { dungeon })
)

export const updateDungeon = dungeon => (
    axios.patch(`/api/dungeon/${dungeon.id}`, { dungeon })
)

export const showDungeon = dungeon => (
    axios.get(`/api/dungeon/${dungeon.id}`)
)

export const deleteDungeon = dungeon => (
    axios.delete(`/api/dungeon/${dungeon.id}`)
)