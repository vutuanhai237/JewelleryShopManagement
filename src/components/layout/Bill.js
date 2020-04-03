import React from "react";
import "../TopNav.scss";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";
class List extends React.Component {
  deleteNote(index) {
    this.state.mang.splice(index, 1);
    this.setState(this.state);
  }
  addNote(content) {
    this.state.mang.push(content);
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <Alert variant="danger" dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      </div>
    );
  }
}

export default connect(function(state) {
  return { mang: state.mang };
})(List);
