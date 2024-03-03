# Node.js Server Project

## Description

This Node.js project provides an API server for managing 'cards' or 'server' data models.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installing

```bash
npm install
Running the server
bash
Copy code
npm start / npm run dev
Features
Secure authentication with bcryptjs and jsonwebtoken.
Compression and performance enhancements with compression.
Secure HTTP headers with helmet.
Easy environment variable management with dotenv.
Logging with morgan .
Data validation with joi.
Database management with mongoose for MongoDB and mysql2 for MySQL.
Usage
After starting the server, you will see a pink message indicating successful connection.

You can interact with the API to create, read, update, and delete resources.

Admin Features
Admins can change the business number of the cards.

Security
If an incorrect password is entered 3 times for the same email, the account will be locked for 24 hours.

Contributing
Please contribute using GitHub Flow. Create a branch, add commits, and open a pull request.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Documintaion :

cards:
https://documenter.getpostman.com/view/33188387/2sA2xb7bYy

users:
https://documenter.getpostman.com/view/33188387/2sA2xb7bZ2
```
