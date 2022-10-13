import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./notesReducers";
import { addNote } from "./actions";
import NewNoteInput from "./newInputNote";
import { configure } from "./config";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <div className="App">
      <h1>React Redux Notes List</h1>
      <configure></configure>
      <NewNoteInput addNote={onAddNote} />
      <h2 className="st_title feedback-title">
        <i className="uil uil-comment-info-alt"></i> Send Feedback
      </h2>
      <hr />
      <ol>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ol>
      <h2>Example of center tag</h2>  
      <p>Do not forget to buy <mark>milk</mark> today.</p>
    <center>This content is displayed in the middle of page, but try to use CSS property to align the content as this tag is deprecated now.</center>  

    </div>
  );
}

export default App;
