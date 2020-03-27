var React = require("react");
var {connect} = require("react-redux");
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

  module.exports = Note;