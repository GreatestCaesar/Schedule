<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('group_id');
            $table->unsignedBigInteger('teacher_id');
            $table->unsignedBigInteger('object_id');
            $table->unsignedBigInteger('lesson_form_id');
            $table->integer('week_number');
            $table->unsignedBigInteger('weekday_id');
            $table->integer('subgroup');
            $table->unsignedBigInteger('class_time_id');
            $table->string('building');
            $table->integer('auditorium');
            $table->date('date')->nullable();
            $table->date('date_start')->nullable();
            $table->date('date_end')->nullable();
            $table->time('time')->nullable();

            $table->index('group_id', 'sch_group_idx');
            $table->foreign('group_id', 'sch_group_fk')->references('id')->on('groups')->onDelete('cascade');;

            $table->index('teacher_id', 'sch_teacher_idx');
            $table->foreign('teacher_id', 'sch_teacher_fk')->on('teachers')->references('id')->onDelete('cascade');;

            $table->foreign('object_id', 'sch_object_fk')->on('subjects')->references('id')->onDelete('cascade');;
            $table->foreign('lesson_form_id', 'sch_form_fk')->on('lesson_forms')->references('id');
            $table->foreign('weekday_id', 'sch_weekday_fk')->on('weekdays')->references('id');
            $table->foreign('class_time_id', 'sch_time_fk')->on('class_times')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedules');
    }
}
