<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeachersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teachers', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->string('full_name');
            $table->unsignedBigInteger('department_id');
            $table->unsignedBigInteger('post_id');
            $table->unsignedBigInteger('degree_id');
            $table->unsignedBigInteger('rank_id');
            $table->date('date_start');
            $table->date('date_end');

            $table->foreign('department_id', 'teacher_department_fk')->references('id')->on('departments');
            $table->foreign('post_id', 'teacher_post_fk')->references('id')->on('posts');
            $table->foreign('degree_id', 'teacher_degree_fk')->references('id')->on('academic_degrees');
            $table->foreign('rank_id', 'teacher_rank_fk')->references('id')->on('academic_ranks');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teachers');
    }
}
