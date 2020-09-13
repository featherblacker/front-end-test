import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {likeAction, listenAction} from "../Redux/music/musicAction";
import connect from "react-redux/lib/connect/connect";

function Music(song) {
    const dispatch = useDispatch();

    let f = "btn btn-primary";
    if (song.song.favourite) {
        f = "btn btn-secondary"
    }
    let l = "btn btn-primary";
    if (song.song.listened) {
        l = "btn btn-secondary"
    }
    return (
        <div>
            <div>
                {song.song.artist}
            </div>
            <div>
                {song.song.track}
            </div>

            <button onClick={() => dispatch(listenAction(song.song))} type={"button"} className={song.song.listened?"btn btn-primary":"btn btn-secondary"}>
                Listen
            </button>
            <button onClick={() => dispatch(likeAction(song.song))} type={"button"} className={f}>
                Favorite
            </button>
        </div>
    )

}


export default connect(null, {listenAction, likeAction})(Music);