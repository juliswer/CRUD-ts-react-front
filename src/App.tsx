import {useState} from 'react';
import './App.css';
import TaskList from './components/TaskList';
import { Task } from './interfaces/Task';
import logo from './logo.svg'

interface Props {
  title?: string
}

export function App({title}: Props) {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Learn React',
      description: 'Learn React',
      completed: false
    }
  ])

  return (
    <div className="bg-dark text-white" style={{height: '100vh'}}>
      
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="React Logo" style={{width: '4rem',}} />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <TaskList tasks={tasks} />
      </main>

    </div>
  );
}