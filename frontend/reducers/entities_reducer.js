import { combineReducers } from 'redux';
import dungeonReducer from './dungeon_reducer';

const entitiesReducer = (combineReducers)({
    dungeon: dungeonReducer
})

export default entitiesReducer;