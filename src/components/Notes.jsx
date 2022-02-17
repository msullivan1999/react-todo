import React, { Component } from 'react'
import Note from './Note.jsx'
import AddNote from './AddNote.jsx'

export default class Notes extends Component {

    state = {
        notes: [
        {
            id: 1,
            noteTitle: "This is my first note",
            noteBody: "This is the body of my first note",
        },
        {
            id: 2,
            noteTitle: "This is my second note",
            noteBody: "This is the body of my second note",
        },
        {
            id: 3,
            noteTitle: "Another",
            noteBody: "Just to test",
        },
        {
            id: 4,
            noteTitle: "A Fourth note",
            noteBody: "check scaling",
        },
        {
            id: 5,
            noteTitle: "A Fourth note",
            noteBody: "check scaling",
        },
    ]
}
    onAdd = () => {
        const newNote = {
            id: this.state.notes.length+1,
            noteTitle: "New Note",
            noteBody: "What would you like to write?"
        }
        let newNotes = this.state.notes.push(newNote);
        this.setState({newNotes})
    }

    onDelete = noteID => {
        let notes = this.state.notes.filter(note => note.id !== noteID);
        this.setState({notes})

    }

    render() {
        return(
            <div className="row justify-content-center">
                    {this.state.notes.map(note => (
                        <Note
                        key={note.id}
                        onDelete={this.onDelete}
                        note={note}
                        />
                    ))}
                    <AddNote 
                    onAdd={this.onAdd}
                    />
            </div>
        )
    }
}
