import { combineReducers } from 'redux';
import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducer";

const rootReducer = (combineReducers)({
    session: sessionReducer,
    errors: errorsReducer
})

export default rootReducer;



// const RootReducer = combineReducers({
//   entities: entitiesReducer, // users, songs, albums, articles
//   session: sessionReducer, 
//   errors: errorsReducer, // sessionErrorsReducer, albumErrors
//   ui: uiReducer, // modal
// });