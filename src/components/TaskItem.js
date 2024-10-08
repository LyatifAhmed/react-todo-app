// src/components/TaskItem.js

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'react-bootstrap';

const taskVariants = {
  completed: { opacity: 0.5, textDecoration: 'line-through' },
  active: { opacity: 1, textDecoration: 'none' },
};

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <motion.div
      variants={taskVariants}
      animate={task.completed ? 'completed' : 'active'}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-3">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Card.Text>{task.text}</Card.Text>
          <div>
            <motion.button
              className="btn btn-success mr-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => toggleComplete(task.id)}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </motion.button>
            <motion.button
              className="btn btn-danger"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </motion.button>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default TaskItem;







