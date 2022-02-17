import React, { useState } from 'react';


const Greeting = ({ signup, errors, login, currentUser }) => {

    const token = document.querySelector('meta[name="csrf-token"]').content;

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
            signup(user, token)
        } else {
            login(user)
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
        <h1>WELCOME {currentUser.username}</h1>
    )
}

export default Greeting;