# Modak Challenge

This repository contains a JavaScript project implementing a rate-limited notification service. This service ensures that recipients do not receive too many notifications by adhering to defined rate limits for different notification types.

## Project Structure

- **src/**: Contains all source files for the application.
  - **classes/**: Holds the core class files of the application.
    - **rateLimiter.js**: Handles rate limiting logic.
    - **notificationService.js**: Manages the sending of notifications through a gateway, using rate limits.
    - **gateway.js**: Simulates the message sending to users.
  - **index.js**: Main entry point that uses the Notification Service.
- **tests/**: Contains unit tests for each component to ensure functionality and reliability.

## Prerequisites

- Node.js installed on your system.
- npm for managing JavaScript packages.

## Setup

Clone the repository:

```bash
git clone git@github.com:lcaridi/modak-challenge.git
```

Navigate to the project directory:

```bash
cd modak-challenge
```

Install dependencies:

```bash
npm install
```

This will install Jest and any other necessary packages for running the tests.

## Usage and Execution

### Running the Application

To run the main application, open a terminal in the project directory and execute:

```bash
npm start
```

This will start the rate-limited notification service, demonstrating how various notifications are sent while respecting the rate limits for different notification types.

### Running Tests

To execute the tests to verify each component's functionality, run:

```bash
npm test
```

This will run the Jest test suites defined for the rate limiter, notification service, and gateway components.

## Author

@lcaridi
