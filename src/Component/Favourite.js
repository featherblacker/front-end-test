import React, {Component} from "react";
import "./Favourite.css"
import {connect} from "react-redux";
import {likeAction, listenAction} from "../Redux/music/musicAction";

class Favourite extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={"card"}>
                    <div className={"title"}>
                        Favourite
                    </div>
                    <div>
                        {
                            this.props.music.filter(song => song.favourite).map((song, index) => {
                                return (
                                    <div key={index}>
                                        <div>
                                            {song.artist}
                                        </div>
                                        <div>
                                            {song.track}
                                        </div>

                                        <button onClick={this.props.listenAction.bind(this, song)} type={"button"}
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
    }
}

const mapState = (state) => {
    return {
        music: state.music
    }
};

export default connect(mapState, {likeAction, listenAction})(Favourite)
;