import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import styled from 'styled-components';
const Card = styled.div `
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  width: 250px;
  background: #fdf4e3;
  border: 3px solid #ff3856;
`;
const Tag = styled.span `
  display: inline-block;
  margin: 0.2rem;
  padding: 0.2rem 0.5rem;
  background: #ffb6c1;
  border-radius: 6px;
`;
const Description = styled.p `
  max-height: 100px;
  overflow-y: auto;
  word-wrap: break-word;
  white-space: pre-wrap;
`;
const TaskItem = ({ task }) => {
    const navigate = useNavigate();
    const { deleteTask } = useTasks();
    return (_jsxs(Card, { children: [_jsx("h3", { children: task.title }), task.description && _jsx(Description, { children: task.description }), _jsxs(Tag, { children: ["Category: ", task.category] }), _jsx("br", {}), _jsxs(Tag, { children: ["Status: ", task.status] }), _jsx("br", {}), _jsxs(Tag, { children: ["Priority: ", task.priority] }), _jsx("br", {}), _jsx("button", { onClick: () => navigate(`/task/${task.id}`), children: "Edit" }), _jsx("button", { onClick: () => deleteTask(task.id), children: "Remove" })] }));
};
export default TaskItem;
