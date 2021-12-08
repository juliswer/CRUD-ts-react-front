import {useState} from 'react';
import './App.css';

interface Props {
  title: string
}

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
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
    <div className="App">
      <h1>{title}</h1>

      {tasks.map(task => (
        <div>
          <h2>{task.title}</h2>
        </div>
      ))}

    </div>
  );
}