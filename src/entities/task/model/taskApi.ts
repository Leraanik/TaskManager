
import axios from 'axios';
import type{ Task } from './task';

const API_URL = 'https://6878f7e063f24f1fdca03c50.mockapi.io/tasks/tasks';

export const taskApi = {
  async fetchTasks(): Promise<Task[]> {
    const res = await axios.get(API_URL);
    return res.data;
  },

  async createTask(task: Omit<Task, 'id'>): Promise<Task> {
    const res = await axios.post(API_URL, task);
    return res.data;
  },

  async updateTask(task: Task): Promise<Task> {
    const res = await axios.put(`${API_URL}/${task.id}`, task);
    return res.data;
  },

async deleteTask(id: string | number): Promise<void> {
  await axios.delete(`${API_URL}/${id}`);
}

};
