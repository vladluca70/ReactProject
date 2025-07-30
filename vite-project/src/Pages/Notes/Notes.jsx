import React, { useState, useEffect } from "react";
import "./Notes.css"

function Notes() {
    const [notite, setNotite] = useState(() => {
    const salvate = localStorage.getItem("notite");
    return salvate ? JSON.parse(salvate) : [];
  });

  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("notite", JSON.stringify(notite));
  }, [notite]);

  const adaugaNotita = () => {
    if (text.trim() === "") return;
    const nouaNotita = {
      id: Date.now(),
      text: text.trim(),
    };
    setNotite([nouaNotita, ...notite]);
    setText("");
  };

  const stergeNotita = (id) => {
    setNotite(notite.filter((n) => n.id !== id));
  };

  return (
  <div className="app-container">
    <h2>📒 My notes</h2>
    <div className="input-group">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a new note..."
      />
      <button onClick={adaugaNotita}>Add</button>
    </div>
    <ul>
      {notite.map((notita) => (
        <li key={notita.id}>
          {notita.text}
          <button onClick={() => stergeNotita(notita.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

}

export default Notes;
