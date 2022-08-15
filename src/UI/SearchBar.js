import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../context/NoteContext";

const SearchBar = () => {
  const state = useContext(NoteContext);
  const [displayData, setDisplayData] = useState([]);
  const [datalistDisplay, setDatalistDisplay] = useState(false);

  document.addEventListener('click', () => {setDatalistDisplay(false);});

  let displayList = [];

  const handleEnteredSearchValue = (event) => {
    console.log(event.target.value);
    setDatalistDisplay(true);
    for (let element of state.list) {
      if (element.title.toLowerCase().match(event.target.value)) {
        displayList.push(element);
      }
    }

    setDisplayData(displayList);
    console.log(displayData);
  };

  const searchResult = (id) => {
    state.searchNote(id);
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
          onKeyUp={handleEnteredSearchValue}
          onBlur={() => {
            console.log("onBlur: ", displayData);
          }}
        />
        <button className="btn btn-outline-success">Search</button>
      </form>

      {datalistDisplay && displayData.length !== 0 && (
        <div
          className={`data-list ${datalistDisplay == false ? "d-none" : ""}`}
        >
          {displayData.map((element) => {
            return (
              <a key={element.id} onClick={() => searchResult(element.id)}>
                {element.title}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
