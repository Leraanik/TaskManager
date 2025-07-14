import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import TaskList from '../components/TaskList';
import { useTasks } from '../context/TaskContext';
import { v4 as uuidv4 } from 'uuid';
const ButtonAdd = styled.button `
  display: block;
  margin: 20px auto;
  border-radius: 100%;
  color: #fff;
  background-color: #ff3856;

`;
const Home = () => {
    const { addTask } = useTasks();
    const handleAdd = () => {
        const newTask = {
            id: uuidv4(),
            title: 'New Task',
            description: '',
            category: 'Feature',
            status: 'To Do',
            priority: 'Medium',
        };
        addTask(newTask);
    };
    return (_jsxs("div", { children: [_jsx("h1", { children: "Task manager" }), _jsx(ButtonAdd, { onClick: handleAdd, children: "+" }), _jsx(TaskList, {})] }));
};
export default Home;
