import React, {Component} from "react";

class Music extends Component{
    constructor(props) {
        super(props);
        this.state = this.props.song;
    }

    listen = () =>{
        let listen = this.state.listened;
        this.setState({
            listened: !listen
        })
    };

    favourite = () =>{
        let favourite = this.state.favourite;
        this.setState({
            favourite: !favourite
        })
    };

    render(){
        let f = "btn btn-primary";
        if(this.state.favourite){
            f = "btn btn-secondary"
        }
        let l = "btn btn-primary";
        if(this.state.listened){
            l = "btn btn-secondary"
        }
        return(
            <div>
                <div>
                    {this.state.artist}
                </div>
                <div>
                    {this.state.track}
                </div>

                <button onClick={this.listen} type={"button"} className={l}>
                    Listen
                </button>
                <button onClick={this.favourite} type={"button"} className={f}>
                    Favorite
                </button>
            </div>
        )
    }

}
export default Music;