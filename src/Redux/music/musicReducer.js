import {LISTEN} from "./musicType";
import {LIKE} from "./musicType";
import playlist from "../../db";

const initialState = {
    music: playlist
};

const musicReducer = (state = initialState, action) => {
    const id = action.id;
    switch (action.type) {
        case LISTEN:
            state.music[id].listened = !state.music[id].listened;
            return state;
        case LIKE:
            state.music[id].favourite = !state.music[id].favourite;
            return state;
    }
};
export default musicReducer;