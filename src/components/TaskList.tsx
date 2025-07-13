import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';
import styled from 'styled-components';

const Grid = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`;

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <Grid>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </Grid>
  );
};

export default TaskList;
