import { jsx as _jsx } from "react/jsx-runtime";
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';
import styled from 'styled-components';
const Grid = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`;
const TaskList = () => {
    const { tasks } = useTasks();
    return (_jsx(Grid, { children: tasks.map(task => (_jsx(TaskItem, { task: task }, task.id))) }));
};
export default TaskList;
