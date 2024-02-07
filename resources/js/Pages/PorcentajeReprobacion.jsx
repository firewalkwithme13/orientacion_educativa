import React from 'react';

export const PorcentajeReprobacion = ({ calificaciones }) => {
  const calcularPorcentajeReprobadas = (parcial) => {
    const calificacionesReprobadas = calificaciones.filter(calificacion => calificacion[`calificacion_${parcial}`] < 70);
    const porcentajeReprobadas = (calificacionesReprobadas.length / calificaciones.length) * 100;
    return porcentajeReprobadas.toFixed(2);
  };

  return (
    <div className='p-6 mx-auto mt-6'>
        <div className="text-gray-800 font-bold text-xl mx-auto text-left mb-8">Parcial 1: {calcularPorcentajeReprobadas(1)}%</div>
        <div className="text-gray-800 font-bold text-xl mx-auto text-left mb-8">Parcial 2: {calcularPorcentajeReprobadas(2)}%</div>
        <div className="text-gray-800 font-bold text-xl mx-auto text-left mb-8">Parcial 3: {calcularPorcentajeReprobadas(3)}%</div>
    </div>
  );
};
