<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Alumno
 * 
 * @property int $id
 * @property string $matricula
 * @property string $nombre
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Collection|Calificacione[] $calificaciones
 *
 * @package App\Models
 */
class Alumno extends Model
{
	protected $table = 'alumnos';

	protected $fillable = [
		'matricula',
		'nombre'
	];

	public function calificaciones()
	{
		return $this->hasMany(Calificacione::class, 'id_alumno');
	}
}
