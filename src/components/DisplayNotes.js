import React from "react";
import NoteItem from "./NoteItem";

const DisplayNotes = () => {
  return (
    <div className="container my-5 row">
      <h3>Your Notes</h3>
      <div className="row row-cols-md-3 row-cols-lg-4">
        <NoteItem></NoteItem>
        <NoteItem></NoteItem>
        <NoteItem></NoteItem>
        <NoteItem></NoteItem>
        <NoteItem></NoteItem>
      </div>
    </div>
  );
};

export default DisplayNotes;
