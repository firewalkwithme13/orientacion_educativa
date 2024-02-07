<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('calificaciones', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_alumno');
            $table->unsignedBigInteger('id_materia');
            $table->float('calificacion_1')->nullable();
            $table->float('calificacion_2')->nullable();
            $table->float('calificacion_3')->nullable();
            $table->timestamps();

            // Foreign keys
            $table->foreign('id_alumno')->references('id')->on('alumnos')->onDelete('cascade');
            $table->foreign('id_materia')->references('id')->on('materias')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('calificaciones');
    }
};
