var React = require("react");
var Input = require("./Input");
var Note = require("./Note");
var { connect } = require("react-redux");
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
                <Input handleAddNote={this.addNote.bind(this)}></Input>

                {this.props.mang.map((e, i) => (
                    <Note handleDeleteNote={this.deleteNote.bind(this)} index={i} key={i}>
                        {e}
                    </Note>
                ))}
            </div>
        );
    }
}

module.exports = connect(function (state) {
    return { mang: state.mang };
})(List);
