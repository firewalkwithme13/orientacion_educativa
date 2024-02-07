import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Tabla } from './Tabla';
import { PorcentajeReprobacion } from './PorcentajeReprobacion';
import { Divider } from '@chakra-ui/react'
import { Dropdown } from './Dropdown';

export default function Alumno({ auth, calificaciones, materias, alumnos }) {
    console.log(calificaciones);
    console.log(materias);
    console.log(alumnos);

    
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
                        <Tabla></Tabla>
                    </div>
                </div>
                <div className="max-w-7xl sm:px-6 mx-auto lg:w-1/3 mt-1">
                    <div className="max-w-7xl mx-auto sm:px-6">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                            <div className="text-gray-800 font-bold text-2xl mx-auto text-center">Seleccionar Alumno</div>
                            <div className='max-w-sm mt-12'>
                                <Dropdown></Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto sm:px-6">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                            <div className="text-gray-800 font-bold text-xl mx-auto text-center mt-1">Porcentaje de Materias Reprobadas</div>
                            <PorcentajeReprobacion></PorcentajeReprobacion>
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
