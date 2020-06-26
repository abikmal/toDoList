import React, { useState } from 'react'
import firebase from '../firebase.js'
import index from '../index.css'
import HeaderHome from '../components/layout/HeaderHome'
import { withRouter } from 'react-router-dom'

function SignUpPage(props) {

    const{ username, setUsername, setLoggedIn } = props

    const[password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        const userRef = firebase.database().ref('user')
        const newAccount = {
            username,
            password
        }
        userRef.push(newAccount)
        setUsername('')
        setPassword('')
        alert('New User Created. Please Log In.')
    }

    return (
        <div className = 'form-container'>
            <HeaderHome />
            <h1>Sign Up Here!</h1>
            <form onSubmit = {onSubmit} style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
                }}>
                <label>
                    Username
                    <input 
                    className = 'text-container'
                    value = {username}
                    type = 'text'
                    placeholder = 'Your Username...'
                    onChange = {(e) => {setUsername(e.target.value)}}
                    />
                </label>

                <label>
                    Password
                    <input 
                    className = 'text-container'
                    value = {password}
                    type = 'password'
                    placeholder = 'Your Password...'
                    onChange = {(e) => {setPassword(e.target.value)}}
                    />
                </label>

                <input
                type = 'submit'
                value = 'Submit'
                style = {{flex: '.5'}}
                />
            </form>
        </div>
    )
}

export default withRouter(SignUpPage)
// Pranav's example code for pushing to database
// const onSubmit = () => {
//     const todoRef = firebase.database().ref(`todo/${userID}`)
//     const newTodo = {
//       text: todo
//     }
//     todoRef.push(newTodo);
//     firebase.database().ref(`todo/${userID}`).once('value').then((snapshot) => {
//       setTodos(snapshot.val());
//     });
//   }

// const signUp = () => {
//     const usersRef = firebase.database().ref('users')
//     const newUser = {
//       email,
//       password
//     }
//     const newUserId = usersRef.push(newUser).ref.key;
//     setUserID(newUserId);
//     setLoggedIn(true);
//     history.push('/dashboard');
//   }


