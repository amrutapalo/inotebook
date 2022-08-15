import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../context/NoteContext";

const SearchBar = () => {
  const state = useContext(NoteContext);
  const [displayData, setDisplayData] = useState([]);
  const [datalistDisplay, setDatalistDisplay] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");

  document.addEventListener('click', () => {setDatalistDisplay(false);});

  let displayList = [];

  const handleEnteredSearchValue = (event) => {
    console.log(event.target.value);
    setEnteredValue(event.target.value)

    setDatalistDisplay(true);
    for (let element of state.list) {
      if (element.title.toLowerCase().match(event.target.value)) {
        displayList.push(element);
      }
    }
    setDisplayData(displayList);
    console.log(displayData);
  };

  const searchButtonHandler = (event) => {
    event.preventDefault()
    console.log("searchButtonHandler: ",enteredValue);
    state.searchNote(enteredValue,"button-click");
    setDatalistDisplay(false);
  }

  const searchResult = (element) => {
    state.searchNote(element,"data-list");
    setEnteredValue(element.title)
    setDatalistDisplay(false);

  };

  return (
    <div className="search-container">
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleEnteredSearchValue}
          value={enteredValue}
        />
        <button className="btn btn-outline-success" type="submit" onClick={searchButtonHandler}>Search</button>
      </form>

      {datalistDisplay && displayData.length !== 0 && (
        <datalist
          className={`data-list ${datalistDisplay == false ? "d-none" : ""}`}
        >
          {displayData.map((element) => {
            return (
              <option key={element.id} onClick={() => searchResult(element)}>
                {element.title}
              </option>
            );
          })}
        </datalist>
      )}
    </div>
  );
};

export default SearchBar;
