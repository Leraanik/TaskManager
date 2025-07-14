import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
const TaskContext = createContext(null);
const initialTasks = [
    {
        id: '1',
        title: 'Task 1',
        description: 'Description of task number 1',
        category: 'Bug',
        status: 'To Do',
        priority: 'High'
    },
    {
        id: '2',
        title: 'Task 2',
        category: 'Documentation',
        status: 'In Progress',
        priority: 'Medium'
    }
];
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(initialTasks);
    const updateTask = (updated) => {
        setTasks(prev => prev.map(t => (t.id === updated.id ? updated : t)));
    };
    const addTask = (newTask) => {
        setTasks(prev => [...prev, newTask]);
    };
    const deleteTask = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };
    return (_jsx(TaskContext.Provider, { value: { tasks, updateTask, addTask, deleteTask }, children: children }));
};
export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context)
        throw new Error('useTasks must be used within TaskProvider');
    return context;
};
