import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Tabla } from './Tabla';
import { PorcentajeReprobacion } from './PorcentajeReprobacion';
import { useState } from 'react';
import { Divider, Select } from '@chakra-ui/react';

export default function Dashboard({ auth, calificaciones, materias, alumnos }) {
    const [selectedAlumnoId, setSelectedAlumnoId] = useState(null);
    const [calificacionesFiltradas, setCalificacionesFiltradas] = useState(calificaciones);

    const handleAlumnoChange = (event) => {
        const selectedId = event.target.value;
        setSelectedAlumnoId(selectedId);
        console.log('ID del alumno seleccionado:', selectedId);
        
        // Filtrar las calificaciones basadas en el ID del alumno seleccionado
        const filteredCalificaciones = calificaciones.filter(calificacion => calificacion.id_alumno == selectedId);
        console.log('Calificaciones filtradas:', filteredCalificaciones);
        setCalificacionesFiltradas(filteredCalificaciones);
    };
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-2xl text-gray-800 leading-tight">Panel Cuatrimestral</h2>}
        >
            <Head title="Panel Cuatrimestral" />

            <div className="container py-16 flex flex-wrap mx-auto">
                <div className="max-w-7xl mx-auto sm:px-6 lg:w-2/3">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                        <div className="text-gray-800 font-bold text-2xl mx-auto text-center">Calificaciones Parciales</div>
                        <Tabla 
                            calificaciones={calificacionesFiltradas}
                        />
                    </div>
                </div>
                <div className="max-w-7xl sm:px-6 mx-auto lg:w-1/3 mt-1">
                    <div className="max-w-7xl mx-auto sm:px-6">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                            <div className="text-gray-800 font-bold text-2xl mx-auto text-center">Seleccionar Alumno</div>
                            <div className='max-w-sm mt-12'>
                                <Select 
                                    placeholder='Seleccionar' 
                                    onChange={handleAlumnoChange}>
                                        {alumnos.map(alumno => (
                                            <option key={alumno.id} value={alumno.id}>{alumno.nombre}</option>
                                        ))}
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto sm:px-6">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                            <div className="text-gray-800 font-bold text-xl mx-auto text-center mt-1">Porcentaje de Materias Reprobadas</div>
                            <PorcentajeReprobacion calificaciones={calificacionesFiltradas}></PorcentajeReprobacion>
                        </div>
                    </div>
                </div>

                <Divider className='p-6'/>
                
                {/* <div className="max-w-7xl sm:px-6 mx-auto lg:w-1/3">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                        <div className="text-gray-800 font-bold text-2xl mx-auto text-center">Porcentaje de Materias Reprobadas:</div>
                    </div>
                </div> */}
            </div>

        </AuthenticatedLayout>
    );
}
