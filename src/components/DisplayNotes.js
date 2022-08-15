import React, { useContext, useRef, useState, useEffect } from "react";
import NoteContext from "../context/NoteContext";
import EditNoteModal from "./EditNoteModal";
import NoteItem from "./NoteItem";

const DisplayNotes = (props) => {
  const state = useContext(NoteContext);
  console.log("Display Notes: list received: ", state.list);

  const [note, setNote] = useState({
    id: "",
    title: "",
    description: "",
  });

  const onDelete = (id) => {
    state.deleteNote(id);
    props.showAlert("danger", "Deleted Successfully");
  };

  const ref = useRef();
  console.log(ref);

  const onUpdate = (element) => {
    console.log("DisplayNotes: onUpdate: ", element);
    setNote(element);
    ref.current.click();
    console.log("ele:", element);
    console.log("to be updated: ", note);
    // state.updateNote(element);
  };

  return (
    <div className="container my-5 row">
      <h3>Your Notes</h3>
      {
        <EditNoteModal
          ref={ref}
          note={note}
          showAlert={props.showAlert}
        ></EditNoteModal>
      }
      <div className="row row-cols-md-3 row-cols-lg-4 row-cols-xs-2">
        {state.list.length === 0 && <h6>Start Adding Your Notes!</h6>}
        {state.list !== 0 &&
          state.list.map((element) => {
            return (
              <div key={element.id} className="my-1">
                <NoteItem
                  title={element.title}
                  description={element.description}
                  onDelete={() => {
                    onDelete(element.id);
                  }}
                  onUpdate={() => {
                    onUpdate(element);
                  }}
                ></NoteItem>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DisplayNotes;
