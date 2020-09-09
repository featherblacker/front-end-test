import {LIKE} from "./musicType";
import {LISTEN} from "./musicType";

export const listenAction = (id) => {
    return {
        type: LISTEN,
        id: id,
    }
};

export const likeAction = (id) => {
    return {
        type: LIKE,
        id: id,
    }
};
