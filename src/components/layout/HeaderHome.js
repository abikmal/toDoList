import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderDash() {
    const headerStyle = {
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px'
    }

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none'
    }

    return (
        <div>
            <header style = {headerStyle}>
                <h1>Welcome to the ToDoList Application</h1>
                <Link style={linkStyle} to = "/">Sign Up</Link> |
                <Link  style={linkStyle} to = '/login'> {' '}Login</Link> 
            </header>
        </div>
    )
}
