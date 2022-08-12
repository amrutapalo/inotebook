import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const [list, setList] = useState( [
    {
      title: "Complete Hooks",
      description:"Code with harry - 10 videos",
      id: 1,
    },
    {
      title: "Complete CSS",
      description:"complete design",
      id: 2,
    },
    {
      title: "Call Passport Agent",
      description:"search aadhar card",
      id: 3,
    },
    {
      title: "Call Passport Agent",
      description:"ghfchyfyuruytuy yvtuvtutut uituitu7tuitv yrryeyrku htyrtetdhyjt",
      id: 3,
    },
    {
      title: "Call Passport Agent",
      description:"search aadhar card ituitu7tuitv yrryeyrku htyrtetdhy",
      id: 3,
    },
    {
        title: "Call Passport Agent",
        description:"search aadhar card",
        id: 3,
      },
  ]);

  //addNote
  const addNote = (note) => {
    console.log("NoteState: addNote called -- ",note);
    // list.push(note);
    setList(list.concat(note));
    console.log("list --", list);
  }

  return (
    <NoteContext.Provider value={{list, addNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
