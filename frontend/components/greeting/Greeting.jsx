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

    const handleSubmit = () => {
        signup(state)
    }

    return(

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='username' onChange={update('username')} />
                <input type="password" placeholder='password' onChange={update('password')} />
                <button>Submit</button>
            </form>
        </div>

    )
}

export default Greeting;