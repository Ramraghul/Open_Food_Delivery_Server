
# Online Food Delivery API

This is the API for an online food delivery application. It supports various functionalities like user management, adding new user types, and interacting with the MongoDB database.

## Table of Contents
1. [Installation](#installation)
2. [Swagger Documentation](#swagger-documentation)
3. [Environment Variables](#environment-variables)
4. [Error Handling](#error-handling)

## Installation

### Prerequisites
- Node.js
- Yarn
- MongoDB (Local or Cloud)

### Steps to Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Setup environment variables

4. Run the server:
   ```bash
   yarn start
   ```

5. The server should now be running at `http://localhost:7099`.

## API Endpoints

### 1. Swagger Documentation

You can access the Swagger UI for the API documentation at:
- [Swagger Docs](http://localhost:7099)

## Environment Variables

The following environment variables are required for the application:

- `PORT`: The port the server will run on.
- `LIVE_URL`: The live URL for the application.
- `NODE_ENV`: The environment (`development` or `production`).
- `MONGODB_URI`: The MongoDB connection string for the application.

## Error Handling

The API uses standard HTTP error codes for response status:
- **200**: Success
- **400**: Bad Request (e.g., validation errors)
- **409**: Conflict (e.g., resource already exists)
- **500**: Internal Server Error

---

**Built with**:
- Express.js
- MongoDB
- Swagger UI
- Yarn
- Jest
- TypeScript

## Issues
    If you encounter any issues or have suggestions, please create a GitHub issue.

## Contact
    or urgent matters or direct communication, please contact Raghul at raghulraghul111@gmail.com.
