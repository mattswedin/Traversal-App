import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup, login, logout } from '../actions/session_actions'
import DungeonCreator from './DungeonCreator';

const Greeting = () => {

    const token = document.querySelector('meta[name="csrf-token"]').content;
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.id)
    const errors = useSelector( state => state.errors.session )

    const [state, setState] = useState({
        username: '',
        password: ''
    })

    const update = field => {
       return event => {
           setState(prevProps => ({
               ...prevProps, [field]: event.target.value
           }))
       }
    }

    const handleSubmit = ( e, kind ) => {

        e.preventDefault()
        let user = {
            username: state.username,
            password: state.password
        }

        if( kind === 'signup' ){
            dispatch(signup(user, token))
        } else {
            dispatch(login(user))
        }
        
    }

    return !currentUser ? (

        <div>
            <form>
                <input type="text" placeholder='username' value={state.username} onChange={update('username')} />
                <input type="password" placeholder='password' value={state.password} onChange={update('password')} />
                <button onClick={(e) => handleSubmit(e, 'signup')}>Sign Up!</button>
                <button onClick={(e) => handleSubmit(e, 'login')}>Login!</button>
            </form>
            <ul>
                {
                    errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))    
                }
            </ul>
            
        </div>

    ) : (
        <div>
            <h1>WELCOME {currentUser.username}</h1>
            <button onClick={() => dispatch(logout())}>Logout</button>
            <DungeonCreator />
        </div>
    )
}

export default Greeting;