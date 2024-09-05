import React, {useState} from "react";
import Note from "./note";

function Notepad() {
    const [notes, setNote] = useState([]);
    const [inputValue, setInputValue] = useState("")

    function setValue(event){
        const value = event.target.value;
        setInputValue(value)
    }

    function addToList(){
        document.getElementById('input-nota').value = "";
        setNote([...notes, inputValue])
    }

    function markAsDone(index){
        let element = document.getElementById(index)
        if(element.classList.contains('line-through')){
            element.classList.remove("line-through");
        }else{
            element.classList.add("line-through");
        }
    }
   
    return (
        <div className="App">
            <h1>To-Do List</h1>
            <div className='container'>
                <div className='info'>
                    <input onChange={setValue} placeholder='New Note' id='input-nota'></input>
                    <button onClick={addToList} id='btn'>Add</button>
                    <ol className="notes">
                        {notes.map((notx, index)=>{
                            return (
                                <Note key={index} function={markAsDone}idx={index} note={notx} />
                            )
                        })}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Notepad;