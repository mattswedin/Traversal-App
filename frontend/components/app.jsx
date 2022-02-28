import React from 'react';
import { Route, Routes } from "react-router";
import Dungeon from './Dungeon';
import Greeting from "./Greeting";


const App = () => {

    return(

        <div>
            <Routes>
                <Route exact path="/" element={<Greeting />} />
                <Route exact path="/dungeon/:dungeonId" element={<Dungeon />} />
            </Routes>
        </div>
    )

};

export default App;