
# CMS Assignment

A full-stack Content Management System (CMS) built using the MERN stack. The application allows administrators to authenticate, manage website pages, and publish content that is dynamically displayed on the public website.

---

## Features

### Admin Panel
- Admin Authentication using JWT
- Create Pages
- Edit Pages
- Delete Pages
- Draft / Published Status
- Protected Routes

### Public Website
- Dynamic Navigation
- Dynamic Page Rendering
- Responsive Design
- Custom 404 Page

---

## Technology Choices

### Frontend
- React
- React Router DOM
- Styled Components
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcrypt

---

## Architecture Overview

The application consists of three independent projects:

```
cms-assignment/
│
├── backend/
├── frontend/
└── frontend-admin/
```

### Backend
Responsible for:
- Authentication
- REST APIs
- MongoDB Operations
- JWT Verification

### Admin Frontend
Responsible for:
- Login
- Dashboard
- Page Management

### Public Frontend
Responsible for:
- Displaying published pages
- Dynamic routing using page slug

---

## Assumptions

- Only authenticated administrators can manage pages.
- Public users can only access published pages.
- MongoDB Atlas is used as the database.
- JWT is stored in Local Storage for authentication.
- One administrator account is sufficient for evaluation.

---

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/cms-assignment.git
cd cms-assignment
```

### Backend

```bash
cd backend
npm install
npm start
```

### Public Frontend

```bash
cd frontend
npm install
npm run dev
```

### Admin Frontend

```bash
cd frontend-admin
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the `backend` folder.

```
PORT=5000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
```

---

## API Endpoints

### Authentication

- POST `/api/auth/register`
- POST `/api/auth/login`

### Pages

- POST `/api/pages`
- GET `/api/pages`
- GET `/api/pages/published`
- GET `/api/pages/:slug`
- PUT `/api/pages/:id`
- DELETE `/api/pages/:id`

---

Admin Login

Email:
hrithik@gmail.com

Password:
12345678

## Deployment

### Backend

Render

### Public Website

Vercel

### Admin Panel

Vercel

---

## Live Demo

### Public Website
https://cms-assignment-ten.vercel.app

### Admin Panel
https://YOUR-ADMIN-VERCEL-URL.vercel.app

### Backend API
https://cms-assignment-wu94.onrender.com

## Author

Hrithik Rao
