import styled from 'styled-components';
import TaskList from '../components/TaskList';
import { useTasks } from '../context/TaskContext';
import { Task } from '../types/Task';
import { v4 as uuidv4 } from 'uuid'; 

const ButtonAdd = styled.button`
  display: block;
  margin: 20px auto;
  border-radius: 100%;
  color: #fff;
  background-color: #ff3856;

`;
const Home = () => {
  const { addTask } = useTasks();

  const handleAdd = () => {
  const newTask: Task = {
    id: uuidv4(),
    title: 'New Task',
    description: '',
    category: 'Feature',
    status: 'To Do',
    priority: 'Medium',
  };

  addTask(newTask);
};

  return (
    <div>
      <h1>Task manager</h1>
      <ButtonAdd onClick={handleAdd}>+</ButtonAdd>
      <TaskList />
    </div>
  );
};

export default Home;
