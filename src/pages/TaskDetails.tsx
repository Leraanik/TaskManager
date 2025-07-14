import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import { useState } from 'react';
import { Task } from '../types/Task';
import styled from 'styled-components';

const DivEdit = styled.div`
    margin: 50px auto;
    border: 5px solid #ff3856;
    width: 350px;
    height: 600px;
    border-radius: 30px;
`;
const TaskDetails = () => {
  const { id } = useParams();
  const { tasks, updateTask } = useTasks();
  const task = tasks.find(t => t.id === id);
  const navigate = useNavigate();

  const [form, setForm] = useState<Task | undefined>(task);

  if (!task || !form) return <p>Задача не найдена</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateTask(form);
    navigate('/');
  };

  return (
    <DivEdit>
      <h2>Editing an issue</h2>
      <input name="title" value={form.title} onChange={handleChange} />
      <br />
      <textarea name="description" value={form.description || ''} onChange={handleChange} />
      <br />
      <div style={{ display: 'flex',margin: '2px 9px', gap: '10px' }}>
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="Bug">Bug</option>
          <option value="Feature">Feature</option>
          <option value="Documentation">Documentation</option>
          <option value="Refactor">Refactor</option>
          <option value="Test">Test</option>
        </select>
        <br />
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <br />
        <select name="priority" value={form.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <br />
      </div>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
      <button onClick={handleSave}>Save</button>
      <button onClick={() => navigate('/')}>Cancel</button>
    </div>
    </DivEdit>
  );
};

export default TaskDetails;
