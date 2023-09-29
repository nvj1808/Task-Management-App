import React, {useState} from 'react'

export const TestForm = ({addTest}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add test
          addTest(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TestForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="test-input" placeholder='What is the task today?' />
    <button type="submit" className='test-btn'>Add Task</button>
  </form>
  )
}
