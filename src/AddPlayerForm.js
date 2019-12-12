import React, { Component } from "react";
import PropTypes from "prop-types";
class AddPlayerForm extends Component {
    static propTypes = {
        addPlayer: PropTypes.func
    };
    playerInput = React.createRef();

    handleSubmit = e => {
        console.log("test");
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
