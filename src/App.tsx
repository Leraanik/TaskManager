import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TaskDetails from './pages/TaskDetails';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <Router basename="/TaskManager">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;
