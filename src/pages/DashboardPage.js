import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import banner from '../assets/banner.jpg';
import './homepage.scss';
import firebase from '../firebase.js';
import Todos from '../components/Todos'
import HeaderDash from '../components/layout/HeaderDash'
import AddTodo from '../components/AddTodo'
import { v4 as uuidv4 } from 'uuid';



export default function HomePage(props) {

  const { username } = props

  //state - todos array
  const [todos, setTodos] = 
    useState(null);


    useEffect(() => {
      firebase.database().ref(`todos/${username}`).once('value').then((snapshot) => {
        console.log(snapshot.val())
        setTodos(snapshot.val());
      });
     
    }, [username])


  //Toggle complete
  const markComplete = (id, entryId, completed) => {
    const todoRef = firebase.database().ref(`todos/${username}/${entryId}`)
    const todoMap = (Object.entries(todos).map(([key, todo]) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      } 
      return [key, todo];
    }) )
    setTodos( Object.fromEntries(todoMap) )
    todoRef.update({
      completed: !completed
    })
  }

  //Delete Todo
  const delTodo = (id, entryId) => {
    const todoRef = firebase.database().ref(`todos/${username}/${entryId}`)
    setTodos( Object.values(todos).filter(todo => todo.id !== id))
    todoRef.remove()
  }

  //Add Todo
  const addTodo = (title) => {
    const todoRef = firebase.database().ref(`todos/${username}`)
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTodos({...todos, newTodo})
    todoRef.push(newTodo)
  }

  //Edit Todo
  const editTodo = (newTitle, id, entryId) => {
    const todoRef = firebase.database().ref(`todos/${username}/${entryId}`)
    const todoMap = (Object.entries(todos).map(([key, todo]) => {
      if(todo.id === id) {
        todo.title = newTitle
      } 
      return [key, todo];
    }) )
    setTodos( Object.fromEntries(todoMap) )
    todoRef.update({
      title: newTitle
    })
  }

  return (
    <div className="HomePage">
      <HeaderDash />
      <AddTodo addTodo = {addTodo}/> 
      <Todos todos = {todos} markComplete = {markComplete} delTodo = {delTodo} editTodo = {editTodo}/>
    </div>
  );

}
