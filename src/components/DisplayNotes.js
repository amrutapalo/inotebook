import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";
import NoteItem from "./NoteItem";

const DisplayNotes = () => {
  const state = useContext(NoteContext);
  console.log("Display Notes: list received: ",state.list);

  const onDelete = (id) => {
    state.deleteNote(id);
  }
  return (
    <div className="container my-5 row">
      <h3>Your Notes</h3>

      <div className="row row-cols-md-3 row-cols-lg-4">
        {state.list.map((element) => {
          return (
            <div key={element.id}>
              <NoteItem
                title={element.title}
                description={element.description}
                onDelete={() => {onDelete(element.id)}}
              ></NoteItem>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayNotes;
