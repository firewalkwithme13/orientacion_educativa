import React from 'react';
import { Select } from '@chakra-ui/react';

export const Dropdown = ({ alumnos, onChange }) => {
  return (
    <div>
      <Select placeholder='Seleccionar' onChange={onChange}>
        {alumnos.map(alumno => (
          <option key={alumno.id} value={alumno.id}>{alumno.nombre}</option>
        ))}
      </Select>
    </div>
  );
};
