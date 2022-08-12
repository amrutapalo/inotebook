import React from 'react'

const AddNote = () => {
  return (
    <form className="m-3">
      <div className="mb-3">
        <h3>Add a node</h3>
        <input type="text" className="form-control form-control-lg p-3 my-3" placeholder='Title'/>
        <input type="text" className="form-control form-control-lg p-3 my-3" placeholder='Description'/>
        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
      </div> 
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default AddNote
