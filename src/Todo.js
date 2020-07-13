import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import db from 'firebase';
import '@firebase/firestore';

function Todo(props) {
    
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline"/>
            </ListItem>
            <Button onClick={event => db.collections('todos').doc(props.todo.id).delete()}>DELETE ME</Button>
        </List>
    );
}

export default Todo;
