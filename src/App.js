import './App.css';
import Context from './Context';
import Display from './Display';

function App() {
  return (
    <div className="App">
      <Context>
        <Display />
      </Context>
    </div>
  );
}

export default App;
