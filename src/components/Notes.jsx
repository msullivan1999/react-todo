import React, { Component } from 'react'
import Note from './Note.jsx'

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
            id: 3,
            noteTitle: "A Fourth note",
            noteBody: "check scaling",
        },
        {
            id: 4,
            noteTitle: "A Fourth note",
            noteBody: "check scaling",
        },
    ]
}

    handleDelete = () => {

    }

    render() {
        return(
            <div className="row justify-content-center">
                    {this.state.notes.map(note => (
                        <Note
                        key={note.id}
                        onDelete={this.handleDelete}
                        note={note}
                        />
                    ))}
            </div>
        )
    }
}

