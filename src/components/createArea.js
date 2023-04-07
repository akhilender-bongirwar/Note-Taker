import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title:"",
    content:""
  });
 
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
      <form>
        <input name="title"
         onChange={handleChange}
         value={note.title} placeholder="Title" />
        <textarea name="content" 
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..." 
        rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
