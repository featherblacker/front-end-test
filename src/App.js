import React from 'react';
import Favourite from "./Component/Favourite.js";
import './App.css';
import Listen from "./Component/Listen";
import {Provider} from 'react-redux';
import store from "./Redux/store.js"
import Playlist from "./Component/Playlist";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Favourite/>
                <Listen/>
                <Playlist/>
            </div>
        </Provider>
    );
}

export default App;
