import * as DungeonApiUtil from '../util/dungeon_api_util'

export const RECEIVE_DUNGEON = 'RECEIVE_DUNGEON';
export const RECEIVE_DUNGEON_ERRORS = 'RECEIVE_DUNGEON_ERRORS'

export const receiveDungeonErrors = errors => ({
    type: RECEIVE_DUNGEON_ERRORS,
    errors
})

export const receiveDungeon = dungeon => ({
    type: RECEIVE_DUNGEON,
    dungeon
})

export const createDungeon = dungeon => dispatch => (
    DungeonApiUtil.createDungeon(dungeon)
    .then((dungeon) => {
        dispatch(receiveDungeon(dungeon))
    })
    .catch(err => {
        dispatch(receiveDungeonErrors(err.response.data))
    })
)

export const showDungeon = dungeon => dispatch => (
    DungeonApiUtil.showDungeon(dungeon)
    .then((dungeon) => {
        dispatch(receiveDungeon(dungeon))
    })
)

export const updateDungeon = dungeon => dispatch => (
    DungeonApiUtil.updateDungeon(dungeon)
    .then((dungeon) => {
        dispatch(receiveDungeon(dungeon))
    })
    .catch((err) => {
        dispatch(receiveDungeonErrors(err))
    })
)

export const deleteDungeon = dungeon => dispatch => (
    DungeonApiUtil.deleteDungeon(dungeon)
    .then((dungeon) => {
        dispatch(receiveDungeon(dungeon))
    })
)