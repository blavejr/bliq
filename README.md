# Bliq Interview Ride Hailing Aggregator App

This application is a ride hailing aggregator developed for Bliq interview purposes. It combines both a frontend and a backend to provide a seamless user experience.

## Features

- **Full Dockerization:** The application is fully dockerized for easy deployment. You can start the application using the command `docker-compose up` or `docker-compose up -d` if you prefer to run it in detached mode.

- **Containerized Components:** Docker spins up three containers:
  1. Backend
  2. Frontend
  3. MongoDB

- **Backend:** The backend is written in TypeScript using the NestJS framework. It handles the logic for aggregating rides from multiple providers.

- **Frontend:** Similarly, the frontend is written in TypeScript using the Next.js framework. It provides the user interface for accessing and interacting with the aggregated ride data.

- **Ride Hailing Aggregator:** The main functionality of the application is to aggregate ride data from multiple providers and present it in a unified UI. Users can view and compare ride options from various providers seamlessly.

- **Postman Collection:** For easy setup and testing, a `postman.json` file is available in the `be/postman` directory. This collection can be imported into Postman, allowing users to quickly set up and test the API endpoints.

## Getting Started

1. Clone the repository to your local machine.
2. Run `docker-compose up` to start the application. Alternatively, use `docker-compose up -d` for a detached mode.
3. Access the frontend application in your browser on `localhost:3001`.

## Technologies Used

- TypeScript
- NestJS
- Next.js
- MongoDB
- Docker
- Postman

## Contributors

- [Blave](https://github.com/blavejr)
