
import { create } from 'zustand';
import type { Task } from './task';
import { taskApi } from './taskApi';

interface TaskStore {
  tasks: Task[];
  loading: boolean;
  fetchTasks: () => Promise<void>;
  createTask: (task: Omit<Task, 'id'>) => Promise<void>;
  updateTask: (task: Task) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  loading: false,

  fetchTasks: async () => {
    set({ loading: true });
    const tasks = await taskApi.fetchTasks();
    set({ tasks, loading: false });
  },

  createTask: async (task) => {
    const newTask = await taskApi.createTask(task);
    set((state) => ({ tasks: [...state.tasks, newTask] }));
  },

updateTask: async (task) => {
  const updated = await taskApi.updateTask(task);
  set((state) => ({
    tasks: state.tasks.map((t) => (t.id === task.id ? updated : t)),
  }));
},

  deleteTask: async (id) => {
    await taskApi.deleteTask(id);
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
    }));
  },
}));
