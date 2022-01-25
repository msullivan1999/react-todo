import React, { Component } from 'react'
import { notesData } from '../data'
import trash from '../assets/trash.svg'

export default class note extends Component {

    deleteNote() {
    }

    updateNote() {
    }

    render() {
        return(
            <div className="row justify-content-center">
                {
                    notesData.map((item, key) => {
                        return (
                                <div key={key} className="card note col-lg-3 col-md-5 col-10 d-flex align-items-stretch m-lg-4 m-md-3 m-3 mt-4 bg-light">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {item.noteTitle}
                                        </h5>
                                        <p className="card-body">
                                            {item.noteBody}
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-primary btn-sm mb-2 shadow-none">Edit</button>
                                        <button className="btn btn-danger btn-sm mb-2 shadow-none"><img src={trash} alt="delete"></img></button>
                                    </div>
                                </div>
                        )
                            
                    })
                }
            </div>
        )
    }
}
