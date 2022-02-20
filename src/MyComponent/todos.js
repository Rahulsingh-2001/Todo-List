import React from 'react'
import {TodoItem} from "../MyComponent/TodoItem";
const styling={
  minHeight:"70vh",
  
}
const mainStyle={
  display:'flex',
  flexDirection:'row'

}
export const Todos = (props) => {
  return (
    <div className="container my-3" style={styling}>
        <h3 className=' my-3'>Todo's List</h3>
        <div className="doc flex-wrap justify-content-center" style={mainStyle}>

       {props.todos.length===0?"No todos To Display":
        props.todos.map((todo)=>{
            return (
            <>
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            <hr/>
            </>)
        })
        }
        </div>
    </div>
  )
}
