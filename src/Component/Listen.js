import React, {Component} from "react";
import "../db"
import playlist from "../db";
import Music from "./Music";

class Listen extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <div className={"card"}>
                    <div className={"title"}>
                        Listen
                    </div>
                    <div>
                        {
                            playlist.playlist.map((song, index) =>{

                                return(
                                    song.listened && <div key={index}>
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

export default Listen;