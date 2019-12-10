import React, { Component } from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
    // let names = ["sam", "sara"];
    constructor(props) {
        super(props);
        this.state = {
            names: ["sam", "sara", "ben", "jake"]
        };
    }
    handleAddName = newName => {
        console.log("test");
        // this.setState(state => {
        //     return { names: this.state.names.push(newName) };
        // });
        // console.log(this.state);
    };

    render() {
        return (
            <div className="ui container comments">
                {this.state.names.map(name => (
                    <CommentDetail name={name} />
                ))}
                <AddPlayerForm addName={this.handleAddName} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
