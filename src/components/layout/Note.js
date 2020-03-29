<<<<<<< Updated upstream
var React = require("react");
var {connect} = require("react-redux");
=======
import React from "react";
import { connect } from "react-redux";
import * as action from "../../actions/item_action"




>>>>>>> Stashed changes
class Note extends React.Component {
  deleteNote() {
    const { index, dispatch } = this.props;
    dispatch(action.delete_item(index));
  }
  render() {
    return (
      <div>
        <p>{this.props.children}</p>
        <button onClick={this.deleteNote.bind(this)}>Delete</button>
      </div>
    );
  }
}

<<<<<<< Updated upstream
  module.exports = Note;
=======
export default connect(function (state) {
  return { mang: state.mang };
})(Note);
>>>>>>> Stashed changes
