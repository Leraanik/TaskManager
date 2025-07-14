import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import { useState } from 'react';
import styled from 'styled-components';
const DivEdit = styled.div `
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
    const [form, setForm] = useState(task);
    if (!task || !form)
        return _jsx("p", { children: "\u0417\u0430\u0434\u0430\u0447\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430" });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSave = () => {
        updateTask(form);
        navigate('/');
    };
    return (_jsxs(DivEdit, { children: [_jsx("h2", { children: "Editing an issue" }), _jsx("input", { name: "title", value: form.title, onChange: handleChange }), _jsx("br", {}), _jsx("textarea", { name: "description", value: form.description || '', onChange: handleChange }), _jsx("br", {}), _jsxs("div", { style: { display: 'flex', margin: '2px 9px', gap: '10px' }, children: [_jsxs("select", { name: "category", value: form.category, onChange: handleChange, children: [_jsx("option", { value: "Bug", children: "Bug" }), _jsx("option", { value: "Feature", children: "Feature" }), _jsx("option", { value: "Documentation", children: "Documentation" }), _jsx("option", { value: "Refactor", children: "Refactor" }), _jsx("option", { value: "Test", children: "Test" })] }), _jsx("br", {}), _jsxs("select", { name: "status", value: form.status, onChange: handleChange, children: [_jsx("option", { value: "To Do", children: "To Do" }), _jsx("option", { value: "In Progress", children: "In Progress" }), _jsx("option", { value: "Done", children: "Done" })] }), _jsx("br", {}), _jsxs("select", { name: "priority", value: form.priority, onChange: handleChange, children: [_jsx("option", { value: "Low", children: "Low" }), _jsx("option", { value: "Medium", children: "Medium" }), _jsx("option", { value: "High", children: "High" })] }), _jsx("br", {})] }), _jsxs("div", { style: { display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }, children: [_jsx("button", { onClick: handleSave, children: "Save" }), _jsx("button", { onClick: () => navigate('/'), children: "Cancel" })] })] }));
};
export default TaskDetails;
