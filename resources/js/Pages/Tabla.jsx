import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

export const Tabla = ({ calificaciones }) => {
  return (
    <TableContainer className='mt-8'>
      <Table variant='simple'>
        <Thead className='text-wrap'>
          <Tr>
            <Th>Matrícula</Th>
            <Th>Materia</Th>
            <Th isNumeric>Parcial 1</Th>
            <Th isNumeric>Parcial 2</Th>
            <Th isNumeric>Parcial 3</Th>
            <Th isNumeric>Probabilidad de Pasar</Th>
          </Tr>
        </Thead>
        <Tbody className='text-wrap'>
          {calificaciones.map(calificacion => {
            const promedio = Math.round((calificacion.calificacion_1 + calificacion.calificacion_2 + calificacion.calificacion_3) / 3);
            let backgroundColor = '';
            if (calificacion.calificacion_1 < 70 && calificacion.calificacion_2 < 70 && calificacion.calificacion_3 < 70) {
              backgroundColor = 'pink';
            } else if (calificacion.calificacion_1 < 70 || calificacion.calificacion_2 < 70 || calificacion.calificacion_3 < 70) {
              backgroundColor = 'lightyellow';
            }
            return (
              <Tr key={calificacion.id} style={{ backgroundColor }}>
                <Td>{calificacion.alumno.matricula}</Td>
                <Td>{calificacion.materia.nombre}</Td>
                <Td isNumeric>{calificacion.calificacion_1}</Td>
                <Td isNumeric>{calificacion.calificacion_2}</Td>
                <Td isNumeric>{calificacion.calificacion_3}</Td>
                <Td isNumeric>{promedio}%</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};