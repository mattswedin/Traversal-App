import React from 'react';
import { Route, Routes } from "react-router";
import GreetingContainer from "./greeting/GreetingContainer";


const App = () => {

    return(

        <div>
            <Routes>
                <Route exact path="/" element={<GreetingContainer />} />
            </Routes>
        </div>
    )

};

export default App;