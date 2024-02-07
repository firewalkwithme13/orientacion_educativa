<?php

namespace App\Http\Controllers;

use App\Models\Calificacione;
use App\Models\Materia;
use App\Models\Alumno;

use Illuminate\Http\Request;
use Inertia\Inertia;
class CalificacioneController extends Controller
{
    public function index()
    {
        // Obtener todas las calificaciones
        $calificaciones = Calificacione::with('materia', 'alumno')->get();

        // Obtener todas las materias
        $materias = Materia::all();

        // Obtener todos los alumnos
        $alumnos = Alumno::all();

        // Pasar los datos a la vista usando Inertia
        return Inertia::render('Dashboard', [
            'calificaciones' => $calificaciones,
            'materias' => $materias,
            'alumnos' => $alumnos,
        ]);
    }
}
