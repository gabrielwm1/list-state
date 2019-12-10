import React, { Component } from "react";

class AddPlayerForm extends Component {
    playerInput = React.createRef();

    handleSubmit = e => {
        this.props.addName(this.playerInput.current.value);
        e.currentTarget.reset();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="ui form">
                    <div className="fields">
                        <div className="field">
                            <label>First name</label>
                            <input type="text" placeholder="First name"></input>
                            <button className="ui button" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddPlayerForm;
