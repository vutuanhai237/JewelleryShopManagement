var React = require("react");
var { connect } = require("react-redux");

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isAdding: false };
        this.setState(this.state);
    }
    addNote(e) {
        e.preventDefault();
        this.props.handleAddNote(this.refs.txt.value);
        this.refs.txt.value = "";
        this.expand();
    }
    expand() {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.isAdding = !this.state.isAdding;
        this.setState(this.state);
    }
    render() {
        if (this.state.isAdding) {
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

module.exports = Input;