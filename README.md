# Dockerized MERN Stack Application

This is a full-stack web application built with the MERN stack (MongoDB, Express.js, React, and Node.js), containerized using Docker, and configured for CI/CD with GitHub Actions.

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [How It Works](#how-it-works)
- [Docker Configuration](#docker-configuration)
- [GitHub Actions CI/CD](#github-actions-cicd)
- [Environment Variables](#environment-variables)
- [How to Run Locally](#how-to-run-locally)
- [Pushing to Docker Hub](#pushing-to-docker-hub)
- [Extending the Project](#extending-the-project)
- [License](#license)

## Project Overview

This project serves as a foundational template for full-stack development using the MERN stack. It includes a React frontend and an Express/Node backend. The frontend and backend are containerized with Docker, and GitHub Actions automates image building and pushing to Docker Hub on each push to the `main` branch.

## Technology Stack

- **Frontend**: React with Vite
- **Backend**: Express.js, Node.js
- **Containerization**: Docker, Docker Compose
- **CI/CD**: GitHub Actions
- **Deployment**: Docker Hub (image hosting)

## Folder Structure

Dockerized-MERN-App/
├── backend/
│ ├── Dockerfile
│ ├── index.js
│ ├── package.json
│ └── .env.example
├── frontend/
│ ├── Dockerfile
│ ├── vite.config.js
│ ├── package.json
│ ├── public/
│ │ └── index.html
│ └── src/
│ ├── App.jsx
│ └── main.jsx
├── docker-compose.yml
├── .github/
│ └── workflows/
│ └── deploy.yml
├── README.md


## Features

- Simple React-based UI fetching data from backend API
- Express backend API serving sample response
- Fully dockerized with separate Dockerfiles for frontend and backend
- Docker Compose for local multi-container development
- GitHub Actions pipeline to build and push images to Docker Hub

## How It Works

- The backend runs on port 5000 and serves an API endpoint (`/api`).
- The frontend (React + Vite) runs on port 3000 and calls the backend using the `/api` route.
- Docker Compose runs both services locally.
- GitHub Actions builds and pushes Docker images to Docker Hub automatically when code is pushed to `main`.

## Docker Configuration

- Each service (frontend and backend) has its own `Dockerfile`.
- Multi-stage builds are used for the frontend to minimize final image size.
- Docker Compose simplifies local development by linking services.

Example service ports:
- Frontend (React): `http://localhost:3000`
- Backend (API): `http://localhost:5000/api`

## GitHub Actions CI/CD

Located in `.github/workflows/deploy.yml`.

The pipeline performs the following steps:
1. Checks out the code
2. Sets up Docker Buildx
3. Logs into Docker Hub using stored GitHub secrets
4. Builds backend and frontend images
5. Pushes them to Docker Hub

### GitHub Secrets Required

Create these secrets in your GitHub repository:
- `DOCKER_USERNAME`: your Docker Hub username
- `DOCKER_PASSWORD`: your Docker Hub password or personal access token

## Environment Variables

### backend/.env.example

PORT=5000


Note: Docker Compose passes this automatically during container runtime. For custom environments, duplicate `.env.example` as `.env`.

## How to Run Locally

Clone the repository and use Docker Compose:

```text
docker-compose up --build

This will:

Build both containers

Start backend on port 5000

Start frontend on port 3000

You can access the frontend in your browser at http://localhost:3000.

Pushing to Docker Hub
To manually push Docker images:

1. Log in:
    docker login
2. Build and tag backend image: 
    docker build -t your_dockerhub_username/mern-app-backend ./backend
    docker build -t your_dockerhub_username/mern-app-frontend ./frontend
3. Push the images to Docker Hub:       
    docker push your_dockerhub_username/mern-app-backend
    docker push your_dockerhub_username/mern-app-frontend


Alternatively, just push code to the main branch and let GitHub Actions handle everything automatically.

## Extending the Project
You can add more features or services as needed:

    1. Add a MongoDB service in docker-compose.yml

    2. Integrate Nginx as a reverse proxy
 
    3. Add TLS/SSL certificates for HTTPS

    4. Deploy to cloud platforms using Docker Swarm or Kubernetes

    5. Use Terraform for infrastructure as code

If using MongoDB:

    1. Add Mongo container in docker-compose.yml

    2. Update backend to use Mongoose or MongoDB native driver

    3. Create schemas and implement CRUD

License
This project is open-source and available under the MIT License.
---

Let me know if you want a version that includes **MongoDB**, **Terraform**, **EC2 Deployment**, or anything else.



