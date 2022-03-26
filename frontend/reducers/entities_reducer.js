import { combineReducers } from 'redux';
import battleReducer from './battle_reducer';
import dungeonReducer from './dungeon_reducer';
import roomReducer from './room_reducer';

const entitiesReducer = (combineReducers)({
    dungeon: dungeonReducer,
    battle: battleReducer,
    room: roomReducer
})

export default entitiesReducer;