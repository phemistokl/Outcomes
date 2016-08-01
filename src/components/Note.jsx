import React from 'react';

import './Note.css';

const Note = React.createClass({
    render() {
        const style = { backgroundColor: this.props.color };
        return (
                <div className="note" style={style}>
                <span className="delete-note" onClick={this.props.onDelete}> x </span>
                 {this.props.children} </div>
            );
    }
});

export default Note;
