// app/Providers/Filament/AdminPanelProvider.php

use Filament\Support\Colors\Color;

public function panel(Panel $panel): Panel
{
    return $panel
        ->default()
        ->id('admin')
        ->path('admin')
        ->login()
        ->darkMode(defaultIsEnabled: true)
        ->brandName('Services')
        ->colors(['primary' => Color::Indigo])
        ->font('Syne');
}