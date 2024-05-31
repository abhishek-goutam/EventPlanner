# EventPlanner
EventPlanner is a backend system for a virtual event management platform focusing on user registration, event scheduling, and participant management. The system uses secure user authentication, event management capabilities, and participant management, all managed through in-memory data structures.

Table of Contents
Features
Technologies Used
Installation
Usage
API Endpoints
Project Structure
Contributing
License
Features
User Authentication: Secure user registration and login using bcrypt for password hashing and JWT for token-based authentication.

Event Management: Create, update, and delete events with fields for date, time, description, and participants.

Participant Management: Users can register for events, and manage their event registrations.

In-Memory Data Storage: User data and event details are stored in memory.

Email Notifications: Users receive email notifications upon successful registration.

Asynchronous Operations: Uses async/await and Promises for handling asynchronous operations.


Technologies Used
Node.js
Express.js
Bcrypt
JWT (JSON Web Tokens)
Nodemailer (for email notifications)
Tap (for testing)
Supertest (for API testing)
