import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props
  return (
    <div>
    <li className='todoItem'>
      {children}
      <div className='actionContainer'>
        <button onClick={() => {
          handleEditTodo(index)
        }}>
        <EditIcon></EditIcon>
        </button>
        <button onClick={() => {
          handleDeleteTodo(index)
        }}>
        <DeleteIcon></DeleteIcon>
        </button>
      </div>
    </li>
    </div>
  )
}
