import { RECEIVE_ENEMY, RECEIVE_UPDATED_ENEMY } from "../actions/enemy_actions";

const initialState = {
    enemies: []
}

const enemyReducer = ( state = initialState, action ) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ENEMY:
                return {
                    ...nextState,
                    enemies: state.enemies.concat(action.enemy.data)
                }
        case RECEIVE_UPDATED_ENEMY:

                return {
                    ...nextState,
                    enemies: nextState.enemies.map(enemy => {
                        if (enemy.id === action.enemy.data.id){
                            enemy = action.enemy.data
                        }
                        return enemy
                    })
                } 
        default:
            return state;
    }
}

export default enemyReducer;