import React from 'react'

function Note(props){
    return(
        <li onClick={()=>{props.function(props.idx)}} id={props.idx} className="note">
            {props.note}
        </li>
    )
}

export default Note;