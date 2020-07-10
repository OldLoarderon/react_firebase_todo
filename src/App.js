import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo'

import './App.css';

function App() {
  
  const [todos, setTodos] = useState(['Kiss my gf', 'Take out trash', 'Work out:', 'Pushups ', 'Crunches', 'Sit-ups', 'Everyday coding']);
  const [input, setinput] = useState('');
  
  const addTodo = (event) => {
    // this will fire off when button is clicked
    event.preventDefault();
    console.log("it's working!");
    setTodos([...todos, input]);
    setinput(''); // clear up input after hitting button

  }

  return (
    <div className="App">
      <h1>Hello World!</h1> 
      <form>
      <FormControl>
      <InputLabel>What's your next task?</InputLabel>
      <Input value={input} onChange={event => setinput(event.target.value)}/>
      </FormControl>

      <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
      </form> 
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
          // <li>{todo}</li>
        ))}
        </ul>
          </div>
  );
}

export default App;
