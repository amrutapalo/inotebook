import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";
import NoteItem from "./NoteItem";

const DisplayNotes = () => {
  const list = useContext(NoteContext);
  console.log(list);
  return (
    <div className="container my-5 row">
      <h3>Your Notes</h3>

      <div className="row row-cols-md-3 row-cols-lg-4">
        {list.map((element) => {
          return (
            <div key={element.id}>
              <NoteItem
                title={element.title}
                description={element.description}
              ></NoteItem>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayNotes;
