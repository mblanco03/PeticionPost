import React, { useState } from 'react';
import './app.css';

const App: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [creditos, setCreditos] = useState<number | ''>('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const curso = { nombre, creditos, descripcion };
    
    console.log('Curso creado:', curso);
  };

  return (
    <div className="app-container">
      <h1>Creación de Cursos</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre del Curso:</label>
        <input 
          type="text" 
          placeholder="Nombre del Curso" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
        />

        <label>Créditos:</label>
        <input 
          type="number" 
          placeholder="Créditos" 
          value={creditos} 
          onChange={(e) => setCreditos(Number(e.target.value))} 
        />

        <label>Descripción:</label>
        <textarea 
          placeholder="Descripción" 
          value={descripcion} 
          onChange={(e) => setDescripcion(e.target.value)} 
        />

        <button type="submit">Crear Curso</button>
      </form>
    </div>
  );
};

export default App;
