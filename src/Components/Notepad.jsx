import React, { useState } from "react";
import Note from "./note";
import Footer from "./footer";

function Notepad() {
    const [notes, setNote] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function setValue(event) {
        const value = event.target.value;
        setInputValue(value);
    }

    function addToList() {
        if(inputValue.trim() !== "") {
            setNote([...notes, inputValue]);
            setInputValue(""); // Clear input after adding
        }
    }

    function markAsDone(index) {
        let element = document.getElementById(index);
        if (element.classList.contains("line-through")) {
            element.classList.remove("line-through");
        } else {
            element.classList.add("line-through");
        }
    }

    function deleteNote(index){
        setNote((prevNotes) => {
          return prevNotes.filter((note, i) => i !== index);
        });
      }

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <div className="container">
                <div className="info">
                    <input
                        value={inputValue} // Bind input value
                        onChange={setValue}
                        placeholder="New Note"
                        id="input-nota"
                    />
                    <button onClick={addToList} id="btn">Add</button>
                    <ol className="notes">
                        {notes.map((note, index) => (
                            <Note
                                key={index}
                                deleteFunction={() => deleteNote(index)} // Pass index correctly
                                function={() => markAsDone(index)}
                                idx={index}
                                note={note}
                            />
                        ))}
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Notepad;