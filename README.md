# VerifyPro

## Introduction

Welcome to our Secure User Authentication System! We provide strong registration, login, and logout features. We ensure safety by managing passwords well, keeping track of access tokens, and making sure only authorized users can access certain parts of the system.

## Project Type

Frontend | Backend | FullStack

## Deplolyed App

Frontend: https://verifypro.onrender.com

Backend: https://verifyprobackend.onrender.com

## Directory Structure

```
├─ .gitignore
├─ README.md
├─ backend
│  ├─ .gitignore
│  ├─ controller
│  │  └─ user.controller.js
│  ├─ index.js
│  ├─ middleware
│  │  ├─ auth.middleware.js
│  │  └─ user.middleware.js
│  ├─ models
│  │  ├─ blacklistToken.model.js
│  │  └─ users.model.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  └─ users.routes.js
│  └─ utils
│     └─ db.config.js
└─ frontend
   ├─ .eslintrc.cjs
   ├─ .gitignore
   ├─ README.md
   ├─ index.html
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  └─ vite.svg
   ├─ src
   │  ├─ App.css
   │  ├─ App.jsx
   │  ├─ assets
   │  │  ├─ AboutUs.jpg
   │  │  ├─ Kashmir.jpg
   │  │  └─ react.svg
   │  ├─ components
   │  │  ├─ Features.jsx
   │  │  ├─ Footer.jsx
   │  │  ├─ Hero.jsx
   │  │  ├─ Navbar.jsx
   │  │  ├─ SignIn.jsx
   │  │  ├─ SignUp.jsx
   │  │  └─ Testimonals.jsx
   │  ├─ contexts
   │  │  └─ AuthContext.jsx
   │  ├─ index.css
   │  ├─ main.jsx
   │  ├─ pages
   │  │  ├─ About.jsx
   │  │  ├─ Auth.jsx
   │  │  ├─ Home.jsx
   │  │  └─ MyTrip.jsx
   │  ├─ routes
   │  │  ├─ AllRoutes.jsx
   │  │  └─ PrivateRoute.jsx
   │  ├─ styles
   │  │  ├─ AuthStyles.css
   │  │  └─ NavbarStyles.css
   │  └─ util
   │     └─ vars.js
   └─ vite.config.js
```

# Project Features

### User Authentication
- Implemented user registration, login, and logout functionalities.
- Password validation: Ensures passwords contain at least one uppercase letter, one special character, and are at least 8 characters long.
- Password hashing using bcrypt for enhanced security.

### Access Token Management
- Utilized cookies to store access tokens for user authentication.
- Access tokens are provided to the frontend to verify user identity.
- Logout functionality includes blacklisting the access token to prevent unauthorized access.

### Protected Routes
- Created a protected route for `MyTrip` in the frontend.
- Users must be authenticated to access this route, ensuring secure access control.

### Frontend Validations
- Email type checking is implemented to ensure valid email formats are used during registration and login.

### Security Enhancements
- Securely handling user data and tokens through cookies and hashed passwords.
- Implementing token blacklisting on logout to prevent unauthorized reuse.



## Default user credentials
  <p>login: user@gmail.com</p>
  <p>password: User@123</p>
  
## Installation & Getting started

Detailed instructions on how to install, configure, and get the project running.

```bash
git clone https://github.com/ShubhKeshari/VerifyPro.git

```
To start Frontend

```bash
cd frontend

npm install

npm run dev

```
To start Backend

```bash
cd backend

npm install

npm run server
```
## Application Snapshots
![image](https://github.com/ShubhKeshari/VerifyPro/assets/114546254/2f6eb915-da1d-4839-9e9d-674b9e96196c)
![image](https://github.com/ShubhKeshari/VerifyPro/assets/114546254/8960139c-7275-4b24-9295-954579c14761)
![image](https://github.com/ShubhKeshari/VerifyPro/assets/114546254/e7c25d49-16d3-4c07-a241-13f3a00dbf9e)
![image](https://github.com/ShubhKeshari/VerifyPro/assets/114546254/acb3a782-08f4-4e2c-a7e1-ebf6135fb4dc)
![image](https://github.com/ShubhKeshari/VerifyPro/assets/114546254/81279668-5685-4b85-8c19-8c93bfce51a2)

## API Endpoints

Backend Applications provide a list of your API endpoints, methods, brief descriptions.

<p>POST /api/users/register - create a new user with validation and registration logic</p>
<p>POST /api/users/login - authenticate a user with validation and authentication logic</p>
<p>POST /api/users/logout - logout a user</p>

## Technology Stack

List and provide a brief overview of the technologies used in the project.

- React.js
- Chakra-ui
- Node.js
- Express.js
- MongoDB
