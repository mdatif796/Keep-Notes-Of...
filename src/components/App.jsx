import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(formItem) {
    setNotes((prevNotes) => {
      return [...prevNotes, formItem];
    });
  }
  function deleteNotes(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((newNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={newNote.title}
            content={newNote.content}
            onDelete={deleteNotes}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
