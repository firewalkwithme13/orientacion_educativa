<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Calificacione
 * 
 * @property int $id
 * @property int $id_alumno
 * @property int $id_materia
 * @property float|null $calificacion_1
 * @property float|null $calificacion_2
 * @property float|null $calificacion_3
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Alumno $alumno
 * @property Materia $materia
 *
 * @package App\Models
 */
class Calificacione extends Model
{
	protected $table = 'calificaciones';

	protected $casts = [
		'id_alumno' => 'int',
		'id_materia' => 'int',
		'calificacion_1' => 'float',
		'calificacion_2' => 'float',
		'calificacion_3' => 'float'
	];

	protected $fillable = [
		'id_alumno',
		'id_materia',
		'calificacion_1',
		'calificacion_2',
		'calificacion_3'
	];

	public function alumno()
	{
		return $this->belongsTo(Alumno::class, 'id_alumno');
	}

	public function materia()
	{
		return $this->belongsTo(Materia::class, 'id_materia');
	}
}
