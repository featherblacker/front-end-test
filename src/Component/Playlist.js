import React, {Component} from "react";
import "../db";
import {connect} from "react-redux";
import {likeAction, listenAction} from "../Redux/music/musicAction";

class Playlist extends Component {
    render() {
        return (
            <div>
                <div className={"card"}>
                    <div className={"title"}>
                        Playlist
                    </div>
                    <div>
                        {
                            this.props.music.map((song, index) => {
                                return (
                                    <div key={index}>
                                        <div>
                                            {song.artist}
                                        </div>
                                        <div>
                                            {song.track}
                                        </div>

                                        <button onClick={(e)=>{this.props.listenAction(song)}} type={"button"}
                                                className={song.listened ? "btn btn-primary" : "btn btn-secondary"}>
                                            Listen
                                        </button>
                                        <button onClick={this.props.likeAction.bind(this, song)} type={"button"}
                                                className={song.favourite ? "btn btn-primary" : "btn btn-secondary"}>
                                            Favorite
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    };
}

const mapState = (state) => {
    return {
        music: state.music
    }
};

export default connect(mapState, {likeAction, listenAction})(Playlist)
;