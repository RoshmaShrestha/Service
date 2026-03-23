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
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name');            // Full name
            $table->string('email')->unique();     // Email (no duplicates)
            $table->string('phone')->nullable();   // Phone (optional)
            $table->text('address')->nullable();   // Address (optional)
            $table->string('city')->nullable();    // City
            $table->string('country')->nullable(); // Country
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
