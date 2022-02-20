import React from 'react';
import { Route, Routes } from "react-router";
import Greeting from "./Greeting";


const App = () => {

    return(

        <div>
            <Routes>
                <Route exact path="/" element={<Greeting />} />
            </Routes>
        </div>
    )

};

export default App;