import React from 'react';
import { useState } from 'react';

export const AddTodo = (props) => {
    const[title,settitle]=useState("");
    const[desc,setdesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title||!desc){
            alert("Title or Description Can't be blank");
        }else{
            props.addTodo(title,desc);
           setdesc("");
           settitle("");
        }
    }
  return (
    <div className="main-container">
      
   <div className="container my-2">
       <h3>Add Todo</h3>
    <form onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Todo's Title</label>
      <input type="text" className="form-control" id="title" value={title} onChange={(e)=>settitle(e.target.value)} aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label htmlFor="desc" className="form-label">Description</label>
      <input type="text" className="form-control" value={desc} onChange={(e)=>setdesc(e.target.value)} id="desc"/>
    </div>
    
    <button type="submit" class="btn btn-success btn-primary">Add Todo</button>
  </form>
  </div>
  </div>
  )
}
