import React, { useContext, useState } from 'react';
import NoteContext from "../context/NoteContext";

const AddNote = () => {

  const state = useContext(NoteContext);
  const [note, setNote] = useState({
    title:"",
    description:""
  })

  const onSubmit = (event) => {
    event.preventDefault();
    // setNote({...note, [event.target.name] : event.target.value});
    console.log(state);
    state.addNote(note)

  }

  const onChange = (event) => {
    setNote({...note, [event.target.name] : event.target.value});
    console.log(note);

  }

  return (
    <form className="m-3" onSubmit={onSubmit}>
      <div className="mb-3">
        <h3>Add a node</h3>
        <input type="text" className="form-control form-control-lg p-3 my-3" placeholder='Title' id="title" name='title' onChange={onChange}/>
        <input type="text" className="form-control form-control-lg p-3 my-3" placeholder='Description' id="description" name='description' onChange={onChange}/>
        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
      </div> 
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default AddNote
