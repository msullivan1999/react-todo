import React, { Component } from 'react'
import { notesData } from '../data'

export default class note extends Component {

    deleteNote() {
    }

    updateNote() {
    }

    render() {
        return(
            <div className="row">
                {
                    notesData.map((item, key) => {
                        return (
                                <div key={key} className="card note col-lg-3 d-flex align-items-stretch m-auto mb-5 justify-content-between">
                                    <div>
                                        <div className="card-header">
                                            {item.noteTitle}
                                        </div>
                                        <div className="class-body">
                                            {item.noteBody}
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-primary btn-sm">Edit</button>
                                        <button className="btn btn-danger btn-sm">Delete</button>
                                    </div>
                                </div>
                        )
                            
                    })
                }
            </div>
        )
    }
}
