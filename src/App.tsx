import {useState} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
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

  const addANewTask = (task: Task) => {
    setTasks([...tasks, task])
  }

  return (
    <div className="bg-dark text-white" style={{height: '100vh'}}>
      
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="React Logo" style={{width: '4rem',}} />
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask} />
          </div>

          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} />
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}