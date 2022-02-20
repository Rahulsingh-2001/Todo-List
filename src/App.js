import './App.css';
import Header from "./MyComponent/header";
import {Footer} from "./MyComponent/footer";
import {AddTodo} from "./MyComponent/AddTodo";
import {Todos} from "./MyComponent/todos";

import React, { useState, useEffect } from 'react';

function App() {



  const onDelete=(todo)=>{
    console.log("I am Delete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));


}

const addTodo=(title,desc)=>{
 let sno;
  if(todos.length==0){
    sno=0;
  }else{
   sno=todos[todos.length-1].sno+1;
  }
  const myTodo={
    title:title,
    desc:desc,
    sno: sno
  }
 setTodos([...todos,myTodo]);

}


  const [todos,setTodos]=useState([]);
  return (
   <>
      
      <Header title="My Todo's List" searchBar={false}/>
      <AddTodo addTodo={addTodo}/> 
      <Todos todos={todos} onDelete={onDelete} />
      <Footer/>
  

   </>
  );
}

export default App;
