import React, {Component} from "react";
import "../db";
import playlist from "../db";
import Music from "./Music";

class Playlist extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <div className={"card"}>
                    <div className={"title"}>
                        Playlist
                    </div>
                    <div>
                        {
                            playlist.playlist.map((song, index) =>{
                                return(
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

export default Playlist;