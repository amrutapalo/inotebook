import React from 'react'

const NoteItem = () => {
  return (
    <div className="card m-3">
    <div className="card-body">
      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <i className="fa-solid fa-trash-can"></i>
      <i className="fa-solid fa-pen-to-square"></i>
    </div>
  </div>
  )
}

export default NoteItem;