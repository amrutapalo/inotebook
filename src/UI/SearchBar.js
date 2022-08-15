import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../context/NoteContext";

const SearchBar = () => {
  const state = useContext(NoteContext);
  const [displayData, setDisplayData] = useState([]);
  const [enteredValue, setEnteredValue] = useState(null);

  let displayList = [];
  const handleEnteredSearchValue = (event) => {
    console.log(event.target.value);
    setEnteredValue(event.target.value);

    for (let element of state.list) {
      if (element.title.toLowerCase().match(event.target.value)) {
        displayList.push(element);
      }
    }

    setDisplayData(displayList);
    console.log(displayData);
  };

  const searchResult = (id) => {
        // event.preventDefault();

        // console.log(id);
      state.searchNote(id);
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
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>

      {displayData.length !== 0 && (
        <div className="data-list">
          {displayData.map((element) => {
            return (
              <a
                key={element.id}
                onClick={() => searchResult(element.id)}
              >
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
