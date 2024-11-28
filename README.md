
# Your id

The Your-ID application is a full-stack solution designed to help operators efficiently store, manage, and process user data with the ultimate goal of generating customized ID cards. Here's a detailed description of its functionality:

## Purpose

The application is intended to streamline the workflow for organizations that need to create ID cards for their members, employees, or clients. Typical use cases include:

- Employee ID management for companies.
- Membership cards for clubs or organizations.
- Student IDs for schools or universities.

# Monorepo

This monorepo contains the codebase for a full-stack application built with **Angular**, **Node.js**, **Express**, and **MongoDB**, and uses **Docker** for containerization.

## Project Structure
    ├── apps 
    │ ├── services 
    │ │ └── your-id-service # Backend service 
    │ │ ├── src # Source code for the service 
    │ │ ├── .env # Environment variables 
    │ │ ├── .env.example # Example environment variables 
    │ │ ├── .gitignore # Git ignore file for service 
    │ │ ├── nodemon.json # Nodemon configuration 
    │ │ ├── package.json # Dependencies and scripts 
    │ │ └── tsconfig.json # TypeScript configuration 
    │ └── web 
    │ └── your-id-web # Frontend application 
    │ ├── .angular # Angular CLI configurations 
    │ ├── .vscode # VS Code workspace settings 
    │ ├── src # Source code for the frontend 
    │ ├── public # Public assets 
    │ ├── .browserslistrc # Browser compatibility settings 
    │ ├── angular.json # Angular CLI configuration 
    │ ├── eslint.config.js # ESLint configuration 
    │ ├── karma.conf.js # Karma testing configuration 
    │ ├── package.json # Dependencies and scripts 
    │ ├── tsconfig.json # TypeScript base configuration 
    │ ├── tsconfig.app.json # Angular app TypeScript configuration 
    │ └── README.md # Documentation for the frontend 
    ├── node_modules # Shared node modules 
    ├── docker-compose.yml # Docker Compose configuration 
    ├── package.json # Root dependencies and scripts 
    └── .gitignore # Git ignore file

## Prerequisites

- **Node.js** (^22.9.3)
- **Docker** and **Docker Compose**
- **Angular CLI** (install globally with `npm install -g @angular/cli`)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Landrewvr/your-id.git
   cd your-id

2. **Install node modules**:

    ```bash
    npm install

## Environment Configuration
    
    cd apps\services\your-id-service
    Copy .env.example to .env in apps/services/your-id-service and fill in the necessary values (e.g., database connection strings, API keys).

## Running the project
    directory: your-id
    cmd: npm run start:dev

    Runs the following commands in parallel:
        - docker compose up --build | Brings the docker container up to use the dockerized database.
        - npm run start:dev --workspace=your-id-web | Runs the ui portion of the application.
        - npm run start:dev --workspace=your-id-service | Runs the backend portion of the application.

## Main Commands

### directory: your-id

#### cmd: npm run start:docker

    Runs the following command:
        - docker compose up -d --build | Brings the docker container up and builds it in detached mode.

#### cmd: npm run stop:docker

    Runs the following command:
        - docker compose down | Brings the docker container down.

#### cmd: npm run stop:docker-v

    Runs the following command:
        - docker compose down -v | Brings the docker container down and purges the volumes.

### directory: your-id/apps/web/your-id-web

#### cmd: npm run lint

    Runs the following command:
        - ng lint | Runs a process that sanitize the ui code base with the esLint rules in apps\web\your-id-web\eslint.config.js.

#### cmd: npm run lint:fix: 

    Runs the following command:
            - ng lint --fix | Runs a process that sanitize the ui code base with the esLint rules in apps\web\your-id-web\eslint.config.js and attemps to fix them.
    
## Project Features

### Backend (your-id-service):

- Node.js with TypeScript
- Express.js for building RESTful APIs
- MongoDB for database management
- Environment-based configurations
- Frontend (your-id-web):

### Angular framework

- Responsive design
- Integrated with the backend via RESTful APIs

## Contact

- Author: Luis Veras
- Email: luis.andrew.veras73@gmail.com
- GitHub: Landrewvr
- Website: https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile
