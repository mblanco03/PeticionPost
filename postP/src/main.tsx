import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Alumn from './alumn';
import App from './App';
import './main.css';

const Main: React.FC = () => {
  return (
    <Router>
      <div className="main-container">
        <nav className="creative-menu">
          <ul>
            <li>
              <Link to="/consulta-alumnos">Consulta de Alumnos</Link>
            </li>
            <li>
              <Link to="/creacion-cursos">Creación de Cursos</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/consulta-alumnos" element={<Alumn />} />
            <Route path="/creacion-cursos" element={<App />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);

export default Main;
