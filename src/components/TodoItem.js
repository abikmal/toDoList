import React, { useState } from 'react'
import PropTypes from 'prop-types'
import EditTodo from './EditTodo'

export default function TodoItem(props) {

    const [check, setCheck] = useState(props.todo.completed ? 'true' : '')

    

    const getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px ccc dotted',
            textDecoration: props.todo.completed ? 'line-through' : 'none'
        }
    }

    const btnStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        float: 'right',
        margin: '5px'
    }
    const { entryId } = props
    const { id, title, completed } = props.todo
    
    return (
        <div style = { getStyle() }>
            <input 
            type='checkbox' checked = {check} onClick = {(e) => setCheck(props.todo.completed ? 'true' : '')} onChange = {(e) => {props.markComplete(id, entryId, completed)}} />
            { title } 
            <button style = {btnStyle} onClick = {(e) => {props .delTodo(id, entryId)}}>x</button>
            <EditTodo entryId = {entryId} id = {id} editTodo = {props.editTodo}/>            
        </div>
    )
}


//PropTypes
// TodoItem.propTypes = {
//     todo: PropTypes.object.isRequired,
//     markComplete: PropTypes.func.isRequired,
//     delTodo: PropTypes.func.isRequired
// }