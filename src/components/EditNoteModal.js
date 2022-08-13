import React, { useContext, useRef, useState, useEffect, forwardRef } from "react";
import NoteContext from "../context/NoteContext";

const EditNoteModal = forwardRef((props, ref) => {
  console.log("-- EDIT MODAL COMPONENT ---- props:" ,props);

  const state = useContext(NoteContext);
  const [note, setNote] = useState({
    id:"",
    title: "",
    description: "",
  });

  useEffect(() => {
    console.log("EditNoteModal: useEffect:",note);
    setNote({
      id:props.note.id,
      title: props.note.title,
      description: props.note.description,
    });
  },[props])
  

  console.log("check note:", note);

  const onSubmit = () => {
    // setNote({...note, [event.target.name] : event.target.value});
    console.log("EditNoteModal: onSubmit:", state);
    state.updateNote(note);
  };

  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
    console.log(note);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref = {ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        // style={{display:"block"}}
        // role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="m-3">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg p-3 my-3"
                    placeholder="Title"
                    id="title"
                    name="title"
                    onChange={onChange}
                    value={note.title}
                  />
                  <input
                    type="text"
                    className="form-control form-control-lg p-3 my-3"
                    placeholder="Description"
                    id="description"
                    name="description"
                    onChange={onChange}
                    value={note.description}

                  />
                </div>
                {/* <button type="submit" className="btn btn-primary">
                  Submit
                </button> */}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onSubmit}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default EditNoteModal;
