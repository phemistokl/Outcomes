import React from 'react';

import NoteSearch from './NoteSearch.jsx';
import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';

import './NotesApp.css';

const NotesApp = React.createClass({
    getInitialState() {
        return {
            notes: []
        };
    },

    componentDidMount() {
        const localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({ notes: localNotes });
        }
    },

    componentDidUpdate() {
        this._updateLocalStorage();
    },

    handleNoteDelete(note) {
        const noteId = note.id;
        const newNotes = this.state.notes.filter(function(note) {
            return note.id !== noteId;
        });
        this.setState({ notes: newNotes });
    },

    handleNoteAdd: function(newNote) {
        const newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    },

    handleNoteSearch: function(event) {
        const searchQuery = event.target.value.toLowerCase();
        const displayedNotes = this.state.notes.filter(function(note) {
            const searchValue = note.text.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({ notes: displayedNotes });
    },

    render: function() {
        return (
            <div className="notes-app">
            <h2 className="app-header">NotesApp</h2>
            <NoteSearch onSearch={this.handleNoteSearch} />
            <NoteEditor onNoteAdd={this.handleNoteAdd} />
            <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
            </div>
            );
    },

    _updateLocalStorage: function() {
        const notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
});

export default NotesApp;
