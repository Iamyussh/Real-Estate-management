# Real Estate Management System

A comprehensive real estate management system that includes both frontend and backend components for managing properties, agents, and clients.

## Authors
- Rahul Raman Dash
- Ayush Samanta

## Project Structure

```
Realestate-Management-System/
├── RealestateApiServer/         # Backend Spring Boot Application
└── RealestateFrontend/          # Frontend React Application
```

## Environment Variables Setup

### Backend Configuration
The following environment variables need to be set for the backend to work:

```bash
# Database Configuration
SPRING_DATASOURCE_URL=jdbc:mysql://your-database-host:port/database_name
SPRING_DATASOURCE_USERNAME=your_username
SPRING_DATASOURCE_PASSWORD=your_password
SPRING_DATASOURCE_DRIVER_CLASS_NAME=com.mysql.cj.jdbc.Driver
```

### Setting up Environment Variables

#### Local Development
1. Create a `.env` file in the `RealestateApiServer` directory
2. Copy the variables from `application.properties.template`
3. Fill in your local database credentials

#### Production (Render)
1. Go to your Render dashboard
2. Select your service
3. Navigate to "Environment" tab
4. Add the environment variables listed above

## Backend (RealestateApiServer)

### Technology Stack
- Java 17
- Spring Boot
- Spring Security
- JWT Authentication
- MySQL Database
- Docker

### Features
- User Authentication and Authorization
- Property Management
- Agent Management
- Client Management
- API Documentation (Swagger)

### API Endpoints
- `/api/auth/*` - Authentication endpoints
- `/api/properties/*` - Property management endpoints
- `/api/agents/*` - Agent management endpoints
- `/api/clients/*` - Client management endpoints

### Database Schema
The system uses a relational database with the following main entities:
- Users
- Properties
- Agents
- Clients
- Transactions

## Frontend (RealestateFrontend)

### Technology Stack
- React
- TypeScript
- Material-UI
- Redux for State Management
- Axios for API calls

### Features
- Responsive Design
- User Authentication
- Property Listing and Search
- Agent Dashboard
- Client Management Interface
- Property Management Tools

## Application Screenshots

### Login Page
![Login Page](screenshots/login.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Property Listing
![Property Listing](screenshots/property-listing.png)

### Property Details
![Property Details](screenshots/property-details.png)

### Agent Management
![Agent Management](screenshots/agent-management.png)

### Client Management
![Client Management](screenshots/client-management.png)

## Getting Started

### Prerequisites
- Java 17
- Node.js (for frontend)
- MySQL
- Docker (optional)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd RealestateApiServer
   ```

2. Configure the environment variables as described above

3. Build and run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

   Or using Docker:
   ```bash
   docker build -t real-estate .
   docker run -p 8080:8080 real-estate
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd RealestateFrontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Deployment

The application can be deployed using Docker containers. Both frontend and backend have their own Dockerfiles for containerization.

### Backend Deployment
```bash
docker build -t real-estate .
docker run -p 8080:8080 real-estate
```

## API Documentation

API documentation is available at `/swagger-ui.html` when running the backend server.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any queries or support, please contact:
- Rahul Raman Dash
- Ayush Samanta
