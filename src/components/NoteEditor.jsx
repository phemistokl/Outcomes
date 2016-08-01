import React from 'react';

import NoteColor from './NoteColor.jsx';

import './NoteEditor.css';

const NoteEditor = React.createClass({
    getInitialState() {
        return {
            text: ''
        };
    },

    handleColorChange(event) {
        this.setState({ color: event.target.style.backgroundColor });
    },

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    },

    handleNoteAddus() {
        const newNote = {
            text: this.state.text,
            color: this.state.color,
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);
        this.setState({ text: ''});
    },

    render() {
        return (
                <div className="note-editor">
                    <textarea
                        placeholder="Enter your note here..."
                        rows={5}
                        className="textarea"
                        value={this.state.text}
                        onChange={this.handleTextChange}
                    />
                    <NoteColor onColorAdd={this.handleColorChange}/>
                    <button className="add-button" onClick={this.handleNoteAddus}>Add</button>
                </div>
            );
    }
});

export default NoteEditor;
