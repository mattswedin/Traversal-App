import axios from 'axios'

export const createDungeon = dungeon => (
    axios.post('/api/dungeons', { dungeon })
)

export const updateDungeon = dungeon => (
    axios.patch(`/api/dungeons/${dungeon.id}`, { dungeon })
)

export const showDungeon = dungeon => (
    axios.get(`/api/dungeons/${dungeon.id}`)
)

export const deleteDungeon = dungeon => (
    axios.delete(`/api/dungeons/${dungeon.id}`)
)