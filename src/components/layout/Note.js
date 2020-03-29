import React from "react";
import { connect } from "react-redux";
import * as action from "../../actions/item_action"
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


export default connect(function (state) {
  return { mang: state.mang };
})(Note);