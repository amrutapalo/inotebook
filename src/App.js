import "./App.css";
import AddNote from "./components/AddNote";
import DisplayNotes from "./components/DisplayNotes";
import NavBar from "./UI/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Alert from "./components/Alert";
import NoteState from "./context/NoteState";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <NoteState>
      <Router>
        <div className="App">
          <NavBar></NavBar>
          {alert != null && <Alert alert={alert}/>}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="container mx-15">
                  <AddNote showAlert={showAlert}></AddNote>
                  <DisplayNotes showAlert={showAlert}></DisplayNotes>
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
