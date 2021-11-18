import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState(()=>{
    return JSON.parse(localStorage.getItem("notes"))||[];
  });

  function addNote(newNote) {
    let notes=JSON.parse(localStorage.getItem('notes'))||[];
    notes.push(newNote);
    localStorage.setItem('notes',JSON.stringify(notes));
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    let notes=JSON.parse(localStorage.getItem('notes'))||[];
    notes=notes.filter((noteItem, index) =>index !== id);
    localStorage.setItem('notes',JSON.stringify(notes));
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
