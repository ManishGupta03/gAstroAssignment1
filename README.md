## Objective :
This project implements a robust and scalable backend system that manages requests from multiple users using a queue structure. Each client connected to the system has its own queue where all requests are processed sequentially. The system uses Node.js for the server, Redis for queue management, MongoDB for data storage, jest for testing, and Prometheus with Grafana for monitoring.

## Features
- User Authentication: Securely authenticate users before they can enqueue requests.
- Request Queueing: Implement a FIFO queue for each client to handle requests.
- Request Processing: Execute requests sequentially using worker processes.
- Concurrency Management: Handle multiple clients and queues concurrently.
- Scalability: Efficiently scale to manage increasing numbers of users and requests.
- Robustness: Error handling and recovery mechanisms to manage failures.
- Logging and Monitoring: Track request handling and monitor performance metrics.

## Architecture
- Client Interface: Users interact with the system and send requests to the server.
- Server: Receives requests, authenticates users, and enqueues requests.
- Queue Management: Each client has a dedicated queue in Redis.
- Worker Processes: Process tasks from queues sequentially.
- Database: MongoDB for data storage.
- Monitoring: Prometheus for metrics collection and Grafana for visualization.

## Diagram
![Flowcharts - Color](https://github.com/ManishGupta03/gAstroAssignment1/assets/117648576/18a20fa6-d964-438c-a2fd-f6aae18ed883)

## Technology Used
- Node-js
- MongoDB
- Jest
- Docker Centralization
- Express-Js
- Javascript
- Redis
- Promethus

## Installation
- Clone the repository: git clone https://github.com/your_username/gAstroAssignment1.git
- Navigate to the project directory: cd gAstroAssignment1
- Install dependencies: npm install
- configure database
- configure .env file

## Usage
- Start the server: npm run start
- Access the  application through a web browser by visiting http://localhost:8085

## Requirements(Should Installed in your local computer)
- Node -js
- MongoDB
- Docker
