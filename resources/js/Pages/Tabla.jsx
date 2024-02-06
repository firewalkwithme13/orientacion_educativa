import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export const Tabla = () => {
  return (
    <TableContainer className='mt-8'>
        <Table variant='striped'>
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
                <Tr>
                    <Td> {/* Matrícula alumno */} 121037788 </Td>
                    <Th>TECNOLOGÍAS Y APLICACIONES EN INTERNET</Th>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td> {/* Matrícula alumno */} 121037788 </Td>
                    <Th>ADMINISTRACIÓN DE PROYECTOS DE TECNOLOGÍAS DE INFORMACIÓN</Th>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td> {/* Matrícula alumno */} 121037788 </Td>
                    <Th>TECNOLOGÍAS DE VIRTUALIZACIÓN</Th>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td> {/* Matrícula alumno */} 121037788 </Td>
                    <Th>DISEÑO DE INTERFACES</Th>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td> {/* Matrícula alumno */} 121037788 </Td>
                    <Th>SISTEMAS INTELIGENTES</Th>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td> {/* Matrícula alumno */} 121037788 </Td>
                    <Th>GESTIÓN DE DESARROLLO DE SOFTWARE</Th>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td> {/* Matrícula alumno */} 121037788 </Td>
                    <Th>INGLÉS VIII</Th>  
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
            </Tbody>
        </Table>
    </TableContainer>
  )
}
