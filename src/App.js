import React, { Component } from 'react'
import Note from './components/Note.jsx'
import AddNote from './components/AddNote'

export default class App extends Component {
  render() {
    return (
      <div>
        <Note />
        <AddNote />
      </div>
    )
  }
}