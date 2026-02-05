import profile from './profile.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <h1>
          Evaluacion Parcial 1
        </h1>
        <h1>
           Alumno(a): Solano Castro Martha Helena
        </h1>
        <a
          className="App-link"
          href="http://www.linkedin.com/in/helena-solano-0814b73a4?authuser=0"
          target="_blank"
          rel="noopener noreferrer"
        >
                  LINKED IN DE MI PROFILE
        </a>
        <br></br>
         <a
          className="App-link"
          href="https://www.medikt.com.mx/practicas/documentacion.html"
          target="_blank"
          rel="noopener noreferrer"
        >
                  DOCUMENTACION PARCIAL 1
        </a>
      </header>
    </div>
  );
}

export default App;