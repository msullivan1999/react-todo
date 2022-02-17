import React, { Component } from 'react'
import Notes from './components/Notes.jsx'
import AddNote from './components/AddNote'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Notes />
        <AddNote />
      </div>
    )
  }
}