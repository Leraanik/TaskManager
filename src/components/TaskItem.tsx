import { Task } from '../types/Task';
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  width: 250px;
  background: #fdf4e3;
  border: 3px solid #ff3856;
`;

const Tag = styled.span`
  display: inline-block;
  margin: 0.2rem;
  padding: 0.2rem 0.5rem;
  background: #ffb6c1;
  border-radius: 6px;
`;

const Description = styled.p`
  max-height: 100px;
  overflow-y: auto;
  word-wrap: break-word;
  white-space: pre-wrap;
`;


const TaskItem = ({ task }: { task: Task }) => {
  const navigate = useNavigate();
  const { deleteTask } = useTasks();

  return (
    <Card>
      <h3>{task.title}</h3>
      {task.description && <Description>{task.description}</Description>}
      <Tag>Category: {task.category}</Tag><br />
      <Tag>Status: {task.status}</Tag><br />
      <Tag>Priority: {task.priority}</Tag><br />
      <button onClick={() => navigate(`/task/${task.id}`)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Remove</button>
    </Card>
  );
};

export default TaskItem;
