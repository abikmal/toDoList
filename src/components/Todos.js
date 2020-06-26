import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export default function Todos(props) {
    const { todos } = props
    return (
        todos && Object.entries(todos).map(([entryId, todo]) => {
            return (
            <TodoItem 
                key = {todo.id} 
                entryId = {entryId}
                todo={todo} 
                markComplete = {props.markComplete} 
                delTodo = {props.delTodo} 
                editTodo = {props.editTodo} />
        )})
    )
}

//PropTypes
// Todos.propTypes = {
//     todos: PropTypes.array.isRequired,
//     markComplete: PropTypes.func.isRequired,
//     delTodo: PropTypes.func.isRequired,
//     editTodo: PropTypes.func.isRequired,
// }