

export const listenAction = content => {
    return {
        type: "LISTEN",
        id: content.id,
    }
};

export const likeAction = content => {
    return {
        type: "LIKE",
        id: content.id,
    }
};
