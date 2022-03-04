import { combineReducers } from 'redux';
import battleReducer from './battle_reducer';
import dungeonReducer from './dungeon_reducer';

const entitiesReducer = (combineReducers)({
    dungeon: dungeonReducer,
    battle: battleReducer
})

export default entitiesReducer;