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
                <h1>Anish's To Do List</h1>
                <Link style={linkStyle} to = "/dash">Todo List</Link> |
                <Link  style={linkStyle} to = '/about'> {' '}About</Link> |
                <Link style={linkStyle} to = '/login'> {' '}Log Out</Link>
            </header>
        </div>
    )
}
