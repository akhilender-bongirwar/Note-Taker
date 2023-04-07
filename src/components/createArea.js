import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  
  const [isExpanded,setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    title:"",
    content:""
  });

  function expand(){
    setIsExpanded(true);
  }
 
  const handleChange = (e) => {
    const {name,value} = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]:value
      }
    })
  }

  const submitNote = (event) => {
    event.preventDefault();    
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    });
  }
  
  return (
    <div>
      <form className="create-note">

        {isExpanded && (<input name="title"
         onChange={handleChange}
         value={note.title} placeholder="Title" />)}

        <textarea name="content" 
        onChange={handleChange}
        onClick={expand}
        value={note.content}
        placeholder="Take a note..." 
        rows={isExpanded ? 3 : 1} />

        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}> 
        <AddIcon /> 
        </Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
