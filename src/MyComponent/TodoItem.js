import React from 'react'
const styling={
  width:'200px',
  border:'2px solid grey',
  height:'fit-content',
  padding:'20px',
  margin:'20px',
  borderRadius:'20px'
}
export const TodoItem = ({todo, onDelete}) => {
  return (
   <div style={styling} className="my-3 d-flex flex-column   py-3">
       <h4>{todo.title}</h4>
       <p>{todo.desc}</p>
       <button className=" btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
   </div>
  )
}

