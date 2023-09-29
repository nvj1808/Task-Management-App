import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export const Test = ({task, deleteTest, editTest, toggleComplete}) => {
 
  return (
    <div className="Test">
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTest(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTest(task.id)} />
        </div>
    </div>
  )
}
