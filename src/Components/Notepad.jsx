import React from "react";

function Notepad() {
    return (
        <div className="App">
            <h1>To-Do List</h1>
            <div className='container'>
                <div className='info'>
                    <input placeholder='New Note' id='input-nota'></input>
                    <button id='btn'>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Notepad;