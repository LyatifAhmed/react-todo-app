// src/components/TaskList.js

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TaskItem from './TaskItem';
import { ListGroup } from 'react-bootstrap';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <ListGroup className="my-4">
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <TaskItem
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </ListGroup>
  );
};

export default TaskList;


