# Zenthos

A modern web application built with Laravel, Inertia.js, and React.

## Tech Stack

- **Backend**: Laravel 12 with PHP 8.2+
- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives
- **Build Tool**: Vite
- **Database**: SQLite (default)
- **Authentication**: Laravel Sanctum

## Features

- Modern React-based frontend with TypeScript
- Server-side rendering with Inertia.js
- Beautiful UI components with Radix UI
- Responsive design with Tailwind CSS
- Authentication system with Laravel Breeze
- Code quality tools (ESLint, Pint, Duster)

## Requirements

- PHP 8.2 or higher
- Composer
- Node.js 18+ and npm
- Postgres (or your preferred database)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zenthos
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Environment setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Database setup**
   ```bash
   touch database/database.sqlite
   php artisan migrate
   ```

## Development

Start the development server with all services:

```bash
composer run dev
```

This will start:
- Laravel development server
- Queue worker
- Log monitoring (Pail)
- Vite development server

### Individual Commands

- **Backend only**: `php artisan serve`
- **Frontend only**: `npm run dev`
- **Build for production**: `npm run build`

## Code Quality

- **Lint PHP**: `composer run lint`
- **Fix PHP**: `composer run lint:fix`
- **Lint JavaScript/TypeScript**: `npm run lint`
- **Run tests**: `composer run test`

## Project Structure

```
app/
├── Actions/           # Application actions
├── Http/
│   ├── Controllers/   # HTTP controllers
│   ├── Middleware/    # Custom middleware
│   └── Requests/      # Form requests
└── Models/            # Eloquent models

resources/
├── js/
│   ├── Components/    # React components
│   ├── Layouts/       # Page layouts
│   └── Pages/         # Inertia pages
└── css/               # Stylesheets

routes/
├── web.php           # Web routes
└── auth.php          # Authentication routes
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
