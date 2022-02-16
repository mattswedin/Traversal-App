import React, { useState } from 'react';
import { login } from '../../util/session_api_util';

const Greeting = ({ signup, errors }) => {

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

    const handleSubmit = ( kind ) => {
        
        let user = {
            username: state.username,
            password: state.password,
        }

        if( kind === 'signup' ){
            signup(user)
        } else {
            login(user)
        }
        
    }

    return(

        <div>
            <form>
                <input type="text" placeholder='username' value={state.username} onChange={update('username')} />
                <input type="password" placeholder='password' value={state.password} onChange={update('password')} />
                <button onClick={() => handleSubmit('signup')}>Sign Up!</button>
                <button onClick={() => handleSubmit('login')}>Login!</button>
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

    )
}

export default Greeting;