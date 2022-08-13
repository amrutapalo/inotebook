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
    }
  ]);

  //addNote
  const addNote = (note) => {
    console.log("NoteState: addNote called -- note: ",note);
    // list.push(note);
    setList(list.concat({...note, id:list[list.length-1].id + 1}));
    console.log("list --", list);
  }
  
  const deleteNote = (id) => {
    console.log("NoteState: deleteNote called -- id: ",id);
    setList(list.filter((note) => {
      return (note.id !== id)
    }))   
    console.log("after-",list);
  }

  const updateNote = (note) => {
    console.log("NoteState: updateNote called -- note: ",note);
    let updatedList = [];
    try{

      list.forEach((element) => {
        console.log(element);
        if(note.id == element.id){
          element.title = note.title;
          element.description = note.description;
          console.log("check: ", element);
          updatedList.push(element);
          // throw new Error("Time to end the loop"); 
        }else{
          updatedList.push(element);
        }
      });
    }catch(e){
      console.log("Loop has ended");
    }

    setList(updatedList);
    console.log(updatedList);
    console.log(list);
   
  }

  //updateNote

  return (
    <NoteContext.Provider value={{list, addNote, deleteNote, updateNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
