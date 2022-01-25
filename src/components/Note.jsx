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
                                <div key={key} className="card note col-lg-3 col-sm-5 d-flex align-items-stretch m-auto justify-content-between mt-5 bg-light">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {item.noteTitle}
                                        </h5>
                                        <p className="card-body">
                                            {item.noteBody}
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-primary btn-sm mb-2">Edit</button>
                                        <button className="btn btn-danger btn-sm mb-2">Delete</button>
                                    </div>
                                </div>
                        )
                            
                    })
                }
            </div>
        )
    }
}
