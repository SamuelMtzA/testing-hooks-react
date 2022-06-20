import React from 'react'

export const TodoItem = ({todo, pos, handleDelete, handleToggle}) => {
  return (
    <li 
        key={ todo.id }
        className= "list-group-item list-group-item-light"
        >
        <span
          onClick={ () => handleToggle(todo.id) } 
          className={ `${ todo.done && 'complete' }`}
          aria-label="span"
        >    
          {pos+1}. { todo.description }
        </span>
        <button
          className="btn btn-outline-danger"
          onClick={ () => handleDelete(todo.id) }
        >
        Delete
        </button>
    </li>
  )
}