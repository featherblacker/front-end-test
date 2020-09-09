import React, {Component} from "react";
import "./Favourite.css"
import playlist from "../db";
import {useSelector} from "react-redux";
import Music from "./Music";

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
                            playlist.playlist.map((song, index) =>{
                                return(
                                    song.favourite &&
                                    <div key={index}>
                                        <Music song={song}/>
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

export default Favourite;