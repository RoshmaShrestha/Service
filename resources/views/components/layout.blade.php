@props([
    'title' => 'Default Title'
])
<!DOCTYPE html>
<html>
<head>
  <title>{{ $title ?? 'My App' }}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  @vite(['resources/css/app.css', 'resources/js/app.jsx'])

  <style>
    :root {
      --color-bg: #F8FAFC;
      --color-surface: #FFFFFF;
      --color-primary: #1E40AF;
      --color-primary-hover: #1D4ED8;
      --color-primary-light: #DBEAFE;
      --color-text: #334155;
      --color-text-muted: #475569;
      --color-placeholder: #94A3B8;
      --color-border: #E2E8F0;
    }

    body {
      background: var(--color-bg);
      color: var(--color-text);
    }

    .max-w-400 {
      max-width: 400px;
      margin: auto;
    }

    .card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      padding: 1rem;
      text-align: center;
    }

    .nav-link {
      color: var(--color-text-muted);
      font-weight: 500;
    }

    .nav-link:hover {
      color: var(--color-text);
    }

    .btn-primary,
    .btn-secondary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.55rem 1.25rem;
      border-radius: 0.5rem;
      font-weight: 600;
      min-width: 110px;
      transition: background 150ms ease, border 150ms ease, color 150ms ease;
    }

    .btn-primary {
      background: var(--color-primary);
      color: white;
      border: 1px solid transparent;
    }

    .btn-primary:hover {
      background: var(--color-primary-hover);
    }

    .btn-secondary {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      color: var(--color-text);
    }

    .btn-secondary:hover {
      background: var(--color-primary-light);
    }
  </style>
</head>
<body class="p-6">
  @include('components.navigation')

  <main class="mt-10">
    {{ $slot }}
  </main>
</body>
</html>   