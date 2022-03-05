import axios from 'axios'

export const createBattle = ( battle ) => (
    axios.post('/api/battles', { battle })
)

export const updateBattle = ( battle ) => (
    axios.patch(`/api/battles/${battle.id}`, { battle })
)

export const showBattle = ( battleId ) => (
    axios.get(`/api/battles/${battleId}`)
)

export const showAllBattles = () => (
    axios.get('/api/battles')
)