import React, { Component } from 'react'
import trash from '../assets/trash.svg'
// import Notes from './Notes.jsx'

export default class Note extends Component {

    // constructor(props){
    //     super(props)
    //     this.id = 5
    //     this.noteBody = "this is a new note!"
    //     this.noteBody = "this is the body of your new note"
    // }


    // THIS IS BROKEN - NEEDS FIXING ASAP
    // state = {
    //     noteTitle: this.props.note.noteTitle,
    //     noteBody: this.props.note.noteBody
    // }

    // onEdit = noteID => {
    //     this.props.note.edit = !this.props.note.edit
    //     console.log(this.props.note.edit)
    //     // let notes = this.state.notes.filter(note => note.id !== noteID);
    //     // this.setState({notes})

    // }

    setNewNoteData = (event) => {
        console.log("success")
        // console.log()
        // let myForm = document.getElementById('setDataForm');
        // let formData = new FormData(myForm);
        // console.log(formData)
        // event.preventDefault();
        // console.log(data.get("editheader"))
    }

    checkEditing = () => {
        if(this.props.note.edit){
            return (
                <form action={this.setNewNoteData()} id="setDataForm" name="setDataForm">
                    <div className="card-body">
                        <div className="card-title">
                        <textarea className="form-control" id="editheader" name="editheader" rows="1" defaultValue={this.props.note.noteTitle}></textarea>
                    </div>
                    <div className="card-body">
                        <textarea className="form-control" id="editBody" rows="3" defaultValue={this.props.note.noteBody}></textarea>
                    </div>
                    </div>
                    {/* <input type="submit" value="Submit!"></input> */}
                </form>
                
            )
        }
        return (
            <div className="card-body">
                <h5 className="card-title">
                    {this.props.note.noteTitle}
                </h5>
                <p className="card-body">
                    {this.props.note.noteBody}
                </p>
            </div>
        )
    }
    render() {
        return (
            <div className="card note col-lg-3 col-md-5 col-10 d-flex align-items-stretch m-lg-4 m-md-3 m-3 mt-4 bg-light">
                {this.checkEditing()}
                <div className="d-flex justify-content-between">
                    <button onClick={() => this.props.onEdit(this.props.note.id)} className="btn btn-primary btn-sm mb-2 shadow-none">Edit</button>
                    <button onClick={() => this.props.onDelete(this.props.note.id)} className="btn btn-danger btn-sm mb-2 shadow-none"><img src={trash} alt="delete"></img></button>
                </div>
            </div>
        )
    }
}
