import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo'

import './App.css';
import firebase from 'firebase';
import { db } from './firebase';

function App() {
  // Kiss my gf', 'Take out trash', 'Work out:', 'Pushups ', 'Crunches', 'Sit-ups', 'Everyday coding
  const [todos, setTodos] = useState([]);
  const [input, setinput] = useState('');
  
  //when the app loads, listen to database and fetch new todos on change (add, remove etc.)
  useEffect(() => {
  // this code here runs on App.js load
  db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
     setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
  })
  }, []);


  const addTodo = (event) => {
    // this will fire off when button is clicked
    event.preventDefault();
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setTodos([...todos, input]);
    setinput(''); // clear up input after hitting button

  }

  return (
    <div className="App">
      <h1>Your TODO App!</h1> 

      <form>
      <FormControl>
      <InputLabel>What's your next task?</InputLabel>
      <Input value={input} onChange={event => setinput(event.target.value)}/>
      </FormControl>
 
      <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
      </form> 
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
        </ul>
          </div>
  )
        };

        export default App;
