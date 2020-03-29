<<<<<<< Updated upstream
var React = require("react");
var { connect } = require("react-redux");

=======
import React from  "react";
import { connect } from "react-redux";
import * as  action from "../../actions/item_action"
>>>>>>> Stashed changes
class Input extends React.Component {
    addNote(e) {
        e.preventDefault();
        var {dispatch} = this.props;
        dispatch(action.add_item(this.refs.txt.value));
        dispatch(action.expanding());
    }
    expand() {
        var {dispatch} = this.props;
        dispatch(action.expanding());
    
    }
    render() {
        if (this.props.is_adding) {
            return (
                <div>
                    <form onSubmit={this.addNote.bind(this)}>
                        <input type="text" placeholder="Enter text here" ref="txt"></input>
                        <button>Submit</button>
                    </form>
                </div>
            );
        }
        return (
            <div>
                <button onClick={this.expand.bind(this)}>+</button>
            </div>
        );
    }
}

<<<<<<< Updated upstream
module.exports = Input;
=======
export default connect(function (state) {
    return {is_adding: state.is_adding};
})(Input);
    
>>>>>>> Stashed changes
