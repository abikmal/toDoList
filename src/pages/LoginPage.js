import React, { useState } from 'react'
import firebase from '../firebase.js'
import index from '../index.css'
import HeaderHome from '../components/layout/HeaderHome'
import { withRouter } from 'react-router-dom'

function LoginPage(props) {

    const { history, username, setUsername, setLoggedIn } = props

    const[password, setPassword] = useState('')
    

    const onSubmit = (e) => {
        e.preventDefault()
        firebase.database().ref('user').orderByChild('username').equalTo(username).on('value', function(snapshot) {
            if(snapshot.exists()) {
                const user = snapshot.val()
                const key = Object.keys(user)
                if(user[key].password === password) {
                    history.push('/dash')
                    setLoggedIn(true)
                } else {
                    alert('Incorrect Password')
                }
            } else {
                alert('User Does Not Exist. Sign Up Today!')
            }
        })
    }

    return (
        <div className = 'form-container'>
            <HeaderHome />
            <h1>Log in Here!</h1>
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

export default withRouter(LoginPage)



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



