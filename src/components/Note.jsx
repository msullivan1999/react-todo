import React, { Component } from 'react'
import trash from '../assets/trash.svg'
// import Notes from './Notes.jsx'

export default class Note extends Component {

    constructor(props){
        super(props)
        this.id = 5
        this.noteBody = "this is a new note!"
        this.noteBody = "this is the body of your new note"
    }


    // THIS IS BROKEN - NEEDS FIXING ASAP
    // state = {
    //     noteTitle: this.props.note.noteTitle,
    //     noteBody: this.props.note.noteBody
    // }

    deleteNote() {
    }

    updateNote() {
    }

    render() {
        return (
            <div className="card note col-lg-3 col-md-5 col-10 d-flex align-items-stretch m-lg-4 m-md-3 m-3 mt-4 bg-light">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.note.noteTitle}
                    </h5>
                    <p className="card-body">
                        {this.props.note.noteBody}
                    </p>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary btn-sm mb-2 shadow-none">Edit</button>
                    <button onClick={() => this.props.onDelete(this.props.note.id)} className="btn btn-danger btn-sm mb-2 shadow-none"><img src={trash} alt="delete"></img></button>
                </div>
            </div>
        )
    }
}
