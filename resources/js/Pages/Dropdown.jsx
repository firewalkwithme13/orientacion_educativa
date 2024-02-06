import React from 'react'
import { Select } from '@chakra-ui/react'

export const Dropdown = () => {
  return (
    <div>
        <Select placeholder='Seleccionar'>
            <option value='option1'>Alumno 1</option>
            <option value='option2'>Alumno 2</option>
            <option value='option3'>Alumno 3</option>
        </Select>
        
    </div>
  )
}
