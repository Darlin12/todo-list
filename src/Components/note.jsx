import React from 'react'

function Note(props){
    return(
        <li  id={props.idx} className="note">
            <p onClick={()=>{props.function(props.idx)}} >{props.note} </p><button onClick={()=>{props.deleteFunction(props.idx)}} className='deleteButton'><img className='deleteImg' src="boton-eliminar.png" alt="" /></button>
        </li>
    )
}

export default Note;