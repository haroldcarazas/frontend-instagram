import { Switch, Route } from 'wouter';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import Course from './pages/Course';
import Exam from './pages/Exam';

function App() {
  return (
    <Switch>
      <Route path='/' component={Login} />
      <ProtectedRoute>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/courses/:id' component={Course} />
        <Route path='/exams/:id' component={Exam} />
      </ProtectedRoute>
    </Switch>
  );
}

export default App;
