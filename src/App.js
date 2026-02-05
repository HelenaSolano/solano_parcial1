import profile from './profile.jpeg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Descargas from "./Descargas.js";

function Home() {
  return (
    <>
      <img src={profile} className="App-logo" alt="logo" />
      <h1>EVALUACION PARCIAL 1</h1>
      <h2>Alumno: Solano Castro Martha Helena</h2>

      <a
        className="App-link"
        href="https://www.linkedin.com/in/helena-solano-0814b73a4/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LINKEDIN de mi perfil
      </a>

      <br />

      <Link className="App-link" to="/descargas">
        Ir a Documentación / Descargas
      </Link>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/descargas" element={<Descargas />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;