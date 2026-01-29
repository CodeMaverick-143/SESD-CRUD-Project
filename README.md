# SESD-CRUD-Project

A robust RESTful API built with Node.js, Express, TypeScript, and MongoDB. This project implements a modular layered architecture, featuring authentication, product management, request validation, and standardized error handling.

## Features

- **Modular Architecture**: Clean separation of concerns (Controllers, Services, Repositories, Models).
- **Authentication**: Secure signup and login using JWT and Bcrypt.
- **Product Management**: Full CRUD operations for products.
- **Validation**: Request data validation using Zod.
- **Error Handling**: Centralized global error handling middleware.
- **Security**: Basic security headers using Helmet and CORS configuration.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: v14 or higher (v18+ recommended)
- **NPM**: Node Package Manager
- **MongoDB**: A running instance of MongoDB (local or cloud)

## Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/CodeMaverick-143/SESD-CRUD-Project.git
    cd SESD-CRUD-Project
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

## Configuration

Create a `.env` file in the root directory of the project. This file should contain the following environment variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
MONGO_URI=mongodb://localhost:27017/your_database_name

# Security Configuration
JWT_SECRET=your_secure_jwt_secret_key
```

**Environment Variables:**

- `PORT`: Port number on which the server will run (default: 3000).
- `MONGO_URI`: Connection string for your MongoDB instance.
- `JWT_SECRET`: Secret key used for signing JSON Web Tokens.
- `NODE_ENV`: Application environment (development/production).

## Usage

### Development

To start the server in development mode with hot-reloading:

```bash
npm run dev
```

The server will typically start at `http://localhost:${PORT}`.

### Production

To build and start the application for production:

1.  **Build the TypeScript code**

    ```bash
    npm run build
    ```

2.  **Start the production server**

    ```bash
    npm start
    ```

## API Endpoints

The API is prefixed with `/api/v1`.

### System

- **Health Check**: `GET /health`
  - Returns the status of the API.

### Authentication

- **Signup**: `POST /api/v1/auth/signup`
  - Register a new user.
- **Login**: `POST /api/v1/auth/login`
  - Authenticate a user and receive a JWT.

### Products

- **Create Product**: `POST /api/v1/products`
  - Create a new product entry.
- **Get All Products**: `GET /api/v1/products`
  - Retrieve a list of all products.
- **Get Product by ID**: `GET /api/v1/products/:id`
  - Retrieve details of a specific product.
- **Update Product**: `PUT /api/v1/products/:id`
  - Update an existing product.
- **Delete Product**: `DELETE /api/v1/products/:id`
  - Remove a product from the system.

## Project Structure

```
src/
├── config/         # Database and environment configuration
├── constants/      # Static constants and enums
├── middlewares/    # Express middlewares (Error handling, Validation)
├── modules/        # Feature modules (Auth, Product)
│   ├── auth/       # Auth Feature (Controller, Service, Repository, Routes, Model)
│   └── product/    # Product Feature (Controller, Service, Repository, Routes, Model)
├── utils/          # Utility functions and helper classes
├── app.ts          # App configuration and middleware setup
└── server.ts       # Server entry point
```

## License

This project is licensed under the MIT License.