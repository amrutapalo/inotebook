import React from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const state = [
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
  ];

  return (
    <NoteContext.Provider value={state}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
