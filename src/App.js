import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TaskDetails from './pages/TaskDetails';
import { TaskProvider } from './context/TaskContext';
function App() {
    return (_jsx(TaskProvider, { children: _jsx(Router, { basename: "/TaskManager", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/task/:id", element: _jsx(TaskDetails, {}) })] }) }) }));
}
export default App;
