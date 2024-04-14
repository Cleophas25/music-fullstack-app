# Fullstack Music Application

This is a full-stack music application built with React on the front-end and Laravel on the back-end.

## Features

- User registration and authentication
- Browse and search artists & albums
- Favorite and like artists & albums
- API endpoints for accessing music data

## Technologies Used

- Front-end:
  - React
  - React Router
  - Redux 
  - Axios (for making API requests)
  - Tailwind CSS for styling

- Back-end:
  - Laravel (PHP framework)
  - MySQL or other database management system
  - RESTful API design
  - Authentication (OAuth with socialite)

## Installation

1. Clone the repository: `git clone https://github.com/Cleophas25/music-fullstack-app.git`
2. Navigate to the front-end directory: `cd frontend`
3. Install dependencies: `npm install`
4. Start the front-end server: `npm start`
5. Open another terminal window/tab
6. Navigate to the back-end directory: `cd ../backend`
7. Install dependencies: `composer install`
8. Configure the database connection in the `.env` file
9. Migrate the database: `php artisan migrate`
10. Start the back-end server: `php artisan serve`

Make sure you have Node.js, PHP, and Composer installed on your system.

## Usage

- Access the application by visiting `http://localhost:5173` in your browser.
- Register with google
- Explore the music albums and interact with the application.
- Make API requests to the back-end endpoints for retrieving, creating, and updating data.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [React](https://reactjs.org/)
- [Laravel](https://laravel.com/)
- Any additional libraries or resources you used