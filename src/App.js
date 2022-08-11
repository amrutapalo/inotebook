import "./App.css";
import AddNote from "./components/AddNote";
import DisplayNotes from "./components/DisplayNotes";
import NavBar from "./UI/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import NoteState from "./context/NoteState";

function App() {
  return (
    <NoteState>
      <Router>
        <div className="App">
          <NavBar></NavBar>
          <Routes>
            <Route
              exact
              path="/home"
              element={
                <div className="container mx-15">
                  <AddNote></AddNote>
                  <DisplayNotes></DisplayNotes>
                </div>
              }
            ></Route>
            <Route
              exact
              path="/about"
              element={
                <div className="container">
                  <About></About>
                </div>
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
