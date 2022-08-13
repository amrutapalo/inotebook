import React, { useContext } from 'react';

const NoteItem = (props) => {

  return (
    <div className="card m-3">
    <div className="card-body">
      <h6 className="card-subtitle mb-2 text-muted">{props.title}</h6>
      <p className="card-text">{props.description}</p>
      <i className="fa-solid fa-trash-can" onClick={props.onDelete}></i>
      <i className="fa-solid fa-pen-to-square" onClick={props.onUpdate}></i>
    </div>
  </div>
  )
}

export default NoteItem;