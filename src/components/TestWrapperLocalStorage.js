import React, {useState, useEffect} from 'react'
import { TestForm } from './TestForm'
import { v4 as uuidv4 } from 'uuid';
import { Test } from './Test';
import { EditTestForm } from './EditTestForm';
uuidv4();

export const TestWrapperLocalStorage = () => {
    const [tests, setTests] = useState([])

    useEffect(() => {
        const savedTests = JSON.parse(localStorage.getItem('tests')) || [];
        setTests(savedTests);
    }, []);

    const addTest = test => {
        const newTests = [...tests, {id: uuidv4(), task: test, completed: false, isEditing: false}];
        setTests(newTests);
        localStorage.setItem('tests', JSON.stringify(newTests));
    }

    const toggleComplete = id => {
        const newTests = tests.map(test => test.id === id ? {...test, completed: !test.completed} : test);
        setTests(newTests);
        localStorage.setItem('tests', JSON.stringify(newTests));
    }

    const deleteTest = id => {
        const newTests = tests.filter(test => test.id !== id);
        setTests(newTests);
        localStorage.setItem('tests', JSON.stringify(newTests));
    }

    const editTest = id => {
        setTests(tests.map(test => test.id === id ? {...test, isEditing: !test.isEditing} : test))
    }

    const editTask = (task, id) => {
        const newTests = tests.map(test => test.id === id ? {...test, task, isEditing: !test.isEditing} : test);
        setTests(newTests);
        localStorage.setItem('tests', JSON.stringify(newTests));
    }
  return (
    <div className='TestWrapper'>
        <h1>Get Things Done!</h1>
        <TestForm addTest={addTest} />
        {tests.map((test, index) => (
            test.isEditing ? (
                <EditTestForm editTest={editTask} task={test} />
            ) : (
                <Test task={test} key={index} toggleComplete={toggleComplete} deleteTest={deleteTest} editTest={editTest} />
            )
            
        ))}
         
    </div>
  )
}
