import React from 'react';
import Favourite from "./Component/Favourite.js";
import './App.css';
import Listen from "./Component/Listen";
import Playlist from "./Component/Playlist";

function App() {
    return (
            <div className="App">
                <Favourite/>
                <Listen/>
                <Playlist/>
            </div>
    );
}

export default App;
