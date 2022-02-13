import React, { useState } from 'react';

const Greeting = ({ signup }) => {

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

    const handleSubmit = (e) => {
        e.preventDefault()
        let user = {
            username: state.username,
            password: state.password,
        }

        signup(user)
    }

    return(

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='username' value={state.username} onChange={update('username')} />
                <input type="password" placeholder='password' value={state.password} onChange={update('password')} />
                <button>Submit</button>
            </form>
        </div>

    )
}

export default Greeting;