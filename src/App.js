import Navbar from './Navbar';
import Todowrap from './Todowrap';
import Input from './input';
import { useState } from 'react';
import {v4 as uuidv4} from "uuid"
import Todo from './Todowrap';
uuidv4()


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task:todo, completed:false, isEditing:false }])
    console.log(todos)
  }  
  return (
    <div className="App">
      <h1>To-do List</h1>
      <Navbar></Navbar>
      <div className="container">
        <Input addTodo = {addTodo}/>
      </div>
      {todos.map((todo, index) => (
        <Todowrap task={todo} key= {index}/>
      ))}
      
    </div>
  );
}

export default App;
