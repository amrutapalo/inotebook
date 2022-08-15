import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  let updatedList;
  let initList;
  if (localStorage.getItem("list")) {
    initList = JSON.parse(localStorage.getItem("list"));
  } else {
    initList = [];
  }

  const [list, setList] = useState(
    // {
    //   title: "Complete Hooks",
    //   description: "Code with harry - 10 videos",
    //   id: 1,
    // },
    // {
    //   title: "Complete CSS",
    //   description: "complete design",
    //   id: 2,
    // },
    // {
    //   title: "Call Passport Agent",
    //   description: "search aadhar card",
    //   id: 3,
    // },
    initList
  );
  const [searchedList, setSearchedList] = useState([]);

  //addNote
  const addNote = (note) => {
    console.log("NoteState: addNote called -- note: ", note);
    // list.push(note);
    // let id = (list.length == 0) ? 1 : list[list.length - 1].id + 1;
    setList(
      list.concat({
        id: list.length == 0 ? 1 : list[list.length - 1].id + 1,
        ...note,
      })
    );

    if (searchedList.length !== 0) {
      setSearchedList([])
    }
    
    console.log("list --", list);
    localStorage.setItem(
      "list",
      JSON.stringify(
        list.concat({
          id: list.length == 0 ? 1 : list[list.length - 1].id + 1,
          ...note,
        })
      )
    );
  };

  //deleteNote
  const deleteNote = (id) => {
    console.log("NoteState: deleteNote called -- id: ", id);
    setList(
      list.filter((note) => {
        return note.id !== id;
      })
    );

    if (searchedList.length !== 0) {
      setSearchedList([])
    }

    console.log("after-", list);
    localStorage.setItem(
      "list",
      JSON.stringify(
        list.filter((note) => {
          return note.id !== id;
        })
      )
    );
  };

  //updateNote
  const updateNote = (note) => {
    console.log("NoteState: updateNote called -- note: ", note);
    let updatedList = [];
    try {
      list.forEach((element) => {
        console.log(element);
        if (note.id == element.id) {
          element.title = note.title;
          element.description = note.description;
          console.log("check: ", element);
          updatedList.push(element);
          // throw new Error("Time to end the loop");
        } else {
          updatedList.push(element);
        }
      });
    } catch (e) {
      console.log("Loop has ended");
    }

    setList(updatedList);
    console.log(updatedList);
    console.log(list);
    localStorage.setItem("list", JSON.stringify(updatedList));
  };

  //searchNote

  const searchNote = (id) => {
    console.log("searchNote: ", id);
    let filterList = [];
    filterList.push(list.find((x) => x.id === id));
    console.log("searchNote: ", filterList);
    setSearchedList(filterList);
    filterList = [];
  };

  return (
    <NoteContext.Provider
      value={{
        list,
        searchedList,
        addNote,
        deleteNote,
        updateNote,
        searchNote,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
