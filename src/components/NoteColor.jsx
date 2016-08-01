import React from 'react';

import './NoteColor.css';

const NoteColor = React.createClass({
    render() {
        const colorRed = { backgroundColor: "#ff8a80" };
        const colorYellow = { backgroundColor: "#ffff8d" };
        const colorGray = { backgroundColor: "#cfd8dc" };
        const colorBlue = { backgroundColor: "#80d8ff" };
        const colorGreen = { backgroundColor: "#ccff90" };
        return (
            <div className="colorize-block" onClick={this.props.onColorAdd}>
                <div role="button" className="btn-red colorize" style={ colorRed }></div>
                <div role="button" className="btn-yellow colorize" style={ colorYellow }></div>
                <div role="button" className="btn-gray colorize" style={ colorGray }></div>
                <div role="button" className="btn-blue colorize" style={ colorBlue }></div>
                <div role="button" className="btn-green colorize" style={ colorGreen }></div>
            </div>
            );
    }
});

export default NoteColor;
