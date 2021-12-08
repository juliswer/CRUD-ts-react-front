import './App.css';

interface Props {
  title: string
}

function App({title}: Props) {
  return (
    <div className="App">
      <h1>{title}</h1>
    </div>
  );
}

export default App;
