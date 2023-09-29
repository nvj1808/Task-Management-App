import React, { useState } from "react";
import { Test } from "./Test";
import { TestForm } from "./TestForm";
import { v4 as uuidv4 } from "uuid";
import { EditTestForm } from "./EditTestForm";

export const TestWrapper = () => {
  const [tests, setTests] = useState([]);

  const addTest = (test) => {
    setTests([
      ...tests,
      { id: uuidv4(), task: test, completed: false, isEditing: false },
    ]);
  }

  const deleteTest = (id) => setTests(tests.filter((test) => test.id !== id));

  const toggleComplete = (id) => {
    setTests(
      tests.map((test) =>
        test.id === id ? { ...test, completed: !test.completed } : test
      )
    );
  }

  const editTest = (id) => {
    setTests(
      tests.map((test) =>
        test.id === id ? { ...test, isEditing: !test.isEditing } : test
      )
    );
  }

  const editTask = (task, id) => {
    setTests(
      tests.map((test) =>
        test.id === id ? { ...test, task, isEditing: !test.isEditing } : test
      )
    );
  };

  return (
    <div className="TestWrapper">
      <h1>Simple Task Management App</h1>
      <TestForm addTest={addTest} />
      {/* display tests */}
      {tests.map((test) =>
        test.isEditing ? (
          <EditTestForm editTest={editTask} task={test} />
        ) : (
          <Test
            key={test.id}
            task={test}
            deleteTest={deleteTest}
            editTest={editTest}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
