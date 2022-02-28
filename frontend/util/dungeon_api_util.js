import axios from 'axios'

export const createDungeon = dungeon => (
    axios.post('/api/dungeons', { dungeon })
)

export const updateDungeon = dungeon => (
    axios.patch(`/api/dungeons/${dungeon.id}`, { dungeon })
)

export const showAllDungeons = () => (
    axios.get('/api/dungeons')
)

export const showDungeon = (dungeonId) => (
    axios.get(`/api/dungeons/${dungeonId}`)
)

export const deleteDungeon = dungeon => (
    axios.delete(`/api/dungeons/${dungeon.id}`)
)