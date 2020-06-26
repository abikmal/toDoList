import React, { useState } from 'react'

export default function EditTodo(props) {
    const [newTitle, setNewTitle] = useState('')

    const { id, entryId} = props

    const onSubmit = (e) => {
        e.preventDefault()
        props.editTodo(newTitle, id, entryId)
        setNewTitle('')
    }

    return (
        <div>
           <form onSubmit = {onSubmit} >
                <input 
                value = {newTitle}
                type = 'text'
                placeholder = 'Edit Todo...'
                style = {{flex: '5', padding: '5px'}}
                onChange = {(e) => {setNewTitle(e.target.value)}}
                />
                <input
                type = 'submit'
                value = 'Edit'
                />
            </form>
        </div>
    )
}
