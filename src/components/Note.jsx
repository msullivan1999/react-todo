import React, { Component } from 'react'

export default class note extends Component {

    notes = [
        {
            id: 1,
            noteTitle: "this is my first note",
            noteBody: "this is the body of my first note",
        },
        {
            id: 2,
            noteTitle: "this is my second note",
            noteBody: "this is the body of my second note",
        },
        {
            id: 3,
            noteTitle: "another",
            noteBody: "just to test",
        },
    ]
    render() {
        return(
            <div className="row">
                {
                    this.notes.map((item, key) => {
                        return (
                                <div key={key} className="card note col-lg-3 d-flex align-items-stretch m-auto justify-content-between">
                                    <div>
                                        <div className="card-header">
                                            {item.noteTitle}
                                        </div>
                                        <div className="class-body">
                                            {item.noteBody}
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-primary">Edit</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </div>
                                </div>
                        )
                            
                    })
                }
            </div>
        )
    }
}
