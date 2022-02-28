import * as DungeonApiUtil from '../util/dungeon_api_util'

export const RECEIVE_DUNGEON = 'RECEIVE_DUNGEON';
export const RECEIVE_DUNGEON_ERRORS = 'RECEIVE_DUNGEON_ERRORS'
export const RECEIVE_ALL_DUNGEONS = 'RECEIVE_ALL_DUNGEONS'

export const receiveAllDungeons = (dungeons) => ({
    type: RECEIVE_ALL_DUNGEONS,
    dungeons
})

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

export const showDungeon = dungeonId => dispatch => (
    DungeonApiUtil.showDungeon(dungeonId)
    .then((dungeon) => {
        dispatch(receiveDungeon(dungeon))
    })
)

export const showAllDungeons = () => dispatch => (
    DungeonApiUtil.showAllDungeons()
    .then((dungeons) => {
        dispatch(receiveAllDungeons(dungeons))
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