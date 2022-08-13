import React, { useContext, useRef, useState, useEffect } from "react";
import NoteContext from "../context/NoteContext";
import EditNoteModal from "./EditNoteModal";
import NoteItem from "./NoteItem";

const DisplayNotes = () => {
  const state = useContext(NoteContext);
  console.log("Display Notes: list received: ", state.list);

  const [note, setNote] = useState({
    id: "",
    title: "",
    description: "",
  });

  const onDelete = (id) => {
    state.deleteNote(id);
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

  const editNote = (element) => {
    
  };

  return (
    <div className="container my-5 row">
      <h3>Your Notes</h3>
      {<EditNoteModal ref={ref} note={note}></EditNoteModal>}
      <div className="row row-cols-md-3 row-cols-lg-4">
        {state.list && state.list.map((element) => {
          return (
            <div key={element.id}>
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
