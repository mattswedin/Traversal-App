import React, { useState } from 'react';

const Greeting = () => {

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

    return(

        <div>
            <form>
                <input type="text" placeholder='username' onChange={update('username')} />
                <input type="password" placeholder='password' onChange={update('password')} />
            </form>
        </div>

    )
}

export default Greeting;