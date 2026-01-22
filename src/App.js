import profile from './profile.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <p>
          ESTE ES MI HOLA MUNDO DE REACT - ALUMNA - HELENA SOLANO
        </p>
        <a
          className="App-link"
          href="https://www.utd.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
        >
          VISITAR EL SITIO DE LA UTD
        </a>
      </header>
    </div>
  );
}

export default App;
