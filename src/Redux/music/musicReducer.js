
import list from "../../db";

const initialState = {
    music: list.playlist
};

const musicReducer = (state = initialState, action) => {
    const id = action.id;
    let musics = null;
    switch (action.type) {
        case "LISTEN":
            musics = state.music.map((music) => {
                if (music.id === id) {
                    music.listened ^= 1
                }
                return music
            });
            return {
                ...state,
                music: musics
            };
        case "LIKE":
            musics = state.music.map((music) => {
                if (music.id === id) {
                    music.favourite ^= 1
                }
                return music
            });
            return {
                ...state,
                music: musics
            }
        default:
            return state;
    }
};
export default musicReducer;