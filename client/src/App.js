import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Fib from './Fib';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/otherpage">Other Page</Link>
      </header>
      <Fib />
    </div>
  );
}

export default App;
