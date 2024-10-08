// src/components/TaskInput.js

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="my-4">
      <Form.Group controlId="taskInput">
        <Form.Control
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskInput;




