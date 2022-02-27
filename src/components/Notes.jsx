import React, { Component } from 'react'
import Note from './Note.jsx'
import AddNote from './AddNote.jsx'

export default class Notes extends Component {
    state = {
        notes: [
        {
            id: 1,
            noteTitle: "This is your first note",
            noteBody: "Add more using the button below",
            edit: false,
        },
        {
            id: 2,
            noteTitle: "This is my second note",
            noteBody: "This is the body of my second note",
            edit: false,
        },
        {
            id: 3,
            noteTitle: "Another",
            noteBody: "Just to test",
            edit: false,
        },
        {
            id: 4,
            noteTitle: "A Fourth note",
            noteBody: "check scaling",
            edit: false,
        },
    ],
    noteCounter: 4
}

    onAdd = () => {
        const newNote = {
            id: this.state.noteCounter+1,
            noteTitle: "New Note",
            noteBody: "What would you like to write?"
        }
        let newNotes = this.state.notes.push(newNote);
        this.setState({newNotes, noteCounter: newNote.id})
        // console.log(this.state.noteCounter)
    }

    onDelete = noteID => {
        let notes = this.state.notes.filter(note => note.id !== noteID);
        this.setState({notes})

    }

    onEdit = noteID => {
        let notes = this.state.notes
        console.log(notes[noteID-1])
        notes.find(note => note.id === noteID).edit = !notes.find(note => note.id === noteID).edit
        this.setState({notes})
    }

    render() {
        return(
            <div className="row justify-content-center">
                    {this.state.notes.map(note => (
                        <Note
                        key={note.id}
                        onDelete={this.onDelete}
                        onEdit={this.onEdit}
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

