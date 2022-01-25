import React, { Component } from 'react'

export default class addNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            noteTitle: "New Note",
            noteBody: "New Note Body",
        }
    }

    createNote() {
        console.log(this.state)
        this.id += 1;
    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                <button className='btn btn-warning btn-md m-5 shadow-none' onClick={this.createNote()}>Add Note</button>
            </div>
        )
    }
}
