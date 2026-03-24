# NodeFirst REST Server

This is a RESTful API built with Node.js, Express, and MongoDB.

## Features

- **Authentication**: JWT-based login and registration.
- **Security**: Implements `helmet` for security headers and `morgan` for request logging.
- **Validation**: Input validation using `express-validator`.
- **Database**: Mongoose (MongoDB) integration.
- **Error Handling**: Global error handler for consistent API responses.

## Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.example.env`.
4. Start the server:
   ```bash
   npm start
   ```

## API Routes

- `POST /api/auth/login`: User login.
- `GET /api/person`: Get list of persons.
- `POST /api/person`: Create a new person.
- `PUT /api/person/:id`: Update a person.
- `DELETE /api/person/:id`: Delete (logical) a person.
- ... and more for `brand`, `model`, `service`, `vehicle`.
