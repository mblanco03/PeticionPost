import React, { useState } from 'react';

interface Student {
  Carnet: string;
  Estudiante: string;
  Email: string;
  Seccion: string;
}

const StudentForm: React.FC = () => {
  const [carnet, setCarnet] = useState<string>('');
  const [student, setStudent] = useState<Student | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    let normalizedCarnet = carnet.trim().replace(/\s+/g, '');

    if (!normalizedCarnet) {
      alert("Por favor, ingresa un número de carnet.");
      return;
    }

    try {
      const response = await fetch(`https://test-deploy-12.onrender.com/estudiantes`);
      
      if (!response.ok) {
        throw new Error("Estudiantes no encontrados.");
      }
      
      const data: Student[] = await response.json();
      console.log("Datos recibidos:", data); // Verifica los datos recibidos

      // Buscar el estudiante con el carnet correcto
      const foundStudent = data.find(stud => stud.Carnet.replace(/\s+/g, '') === normalizedCarnet);

      if (foundStudent) {
        setStudent(foundStudent);
        setError(null);
      } else {
        setStudent(null);
        setError("Estudiante no encontrado.");
      }
    } catch (error) {
      setStudent(null);
      setError((error as Error).message);
    }
  };

  const handleClear = () => {
    setCarnet('');
    setStudent(null);
    setError(null);
  };

  const handleCancel = () => {
    setCarnet('');
    setStudent(null);
    setError(null);
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '60px', textAlign: 'left' }}>
      <h2>Consulta de alumnos</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>Carnet:</label>
        <input 
          type="text" 
          value={carnet} 
          onChange={(e) => setCarnet(e.target.value)} 
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Nombres:</label>
        <input 
          type="text" 
          value={student?.Estudiante || ''} 
          disabled 
          style={{ width: '40%' }} // Ajusta el ancho del campo
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Correo Electrónico:</label>
        <input 
          type="email" 
          value={student?.Email || ''} 
          disabled 
          style={{ width: '40%' }} // Ajusta el ancho del campo
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Sección:</label>
        <input 
          type="text" 
          value={student?.Seccion || ''} 
          disabled 
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <button onClick={handleSearch}>Buscar</button>
        <button onClick={handleClear} style={{ marginLeft: '10px' }}>Limpiar</button>
        <button onClick={handleCancel} style={{ marginLeft: '10px' }}>Cancelar</button>
      </div>
    </div>
  );
};

export default StudentForm;