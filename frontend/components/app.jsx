import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router';
import GreetingContainer from "./greeting/GreetingContainer";


const App = () => (
    <div>
        <Routes>
            <Route exact path="/" component={GreetingContainer} />
            <Navigate to="/" />
        </Routes>
    </div>
);

export default App;