import React, { useState } from 'react';

export default function AddTodo(props) {
    const [title, setTitle] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        props.addTodo(title)
        setTitle('')
    }   
    
    return (
        <div>
            <form onSubmit = {onSubmit} style = {{display: 'flex'}}>
                <input 
                value = {title}
                type = 'text'
                placeholder = 'Add Todo...'
                style = {{flex: '10', padding: '5px'}}
                onChange = {(e) => {setTitle(e.target.value)}}
                />
                <input
                type = 'submit'
                value = 'Submit'
                style = {{flex: '1'}}
                />
            </form>
        </div>
    )
}
