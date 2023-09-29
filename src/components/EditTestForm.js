import React, {useState} from 'react'

export const EditTestForm = ({editTest, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit test
        editTest(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TestForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="test-input" placeholder='Update task' />
    <button type="submit" className='test-btn'>Add Task</button>
  </form>
  )
}