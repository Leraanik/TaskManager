import { createContext, useContext, useState, ReactNode } from 'react';
import { Task } from '../types/Task';

type TaskContextType = {
  tasks: Task[];
  updateTask: (updated: Task) => void;
  addTask: (newTask: Task) => void;
  deleteTask: (id: string) => void;
};

const TaskContext = createContext<TaskContextType | null>(null);

const initialTasks: Task[] = [
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

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const updateTask = (updated: Task) => {
    setTasks(prev => prev.map(t => (t.id === updated.id ? updated : t)));

  };
  const addTask = (newTask: Task) => {
    setTasks(prev => [...prev, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };


  return (
    <TaskContext.Provider value={{ tasks, updateTask, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used within TaskProvider');
  return context;
};
