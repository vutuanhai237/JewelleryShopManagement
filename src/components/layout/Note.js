import React from "react";
import {connect} from "react-redux";
class Note extends React.Component {
    deleteNote() {
      const { index, handleDeleteNote } = this.props;
      handleDeleteNote(index);
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

export default Note;