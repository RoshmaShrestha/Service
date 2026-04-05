<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */  
    public function boot(): void
    {
        $filamentColorFacade = null;

        if (class_exists('Filament\Support\Facades\FilamentColor')) {
            $filamentColorFacade = 'Filament\Support\Facades\FilamentColor';
        } elseif (class_exists('Filament\Facades\FilamentColor')) {
            $filamentColorFacade = 'Filament\Facades\FilamentColor';
        }

        if ($filamentColorFacade) {
            $filamentColorFacade::register([
                'primary' => '#6366f1',
                'gray'    => '#64748b',
                'success' => '#10b981',
                'warning' => '#f59e0b',
                'danger'  => '#f43f5e',
                'info'    => '#8b5cf6',
            ]);
        }
    }
}
