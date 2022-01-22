import logo from './logo.svg';
import './App.css';
import ApiApp from './apicontext';
import User from './user';
function App() {
  return (
    <ApiApp>
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
      </header>

<User/>

    </div>
    </ApiApp>
  );
}

export default App;
