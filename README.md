# Simplicook

A comprehensive recipe book application with enhanced features and basic CRUD operations.

## Demo
https://github.com/JeyasuryaUR/Simplicook/assets/72905976/6d1ab551-332b-4026-8dd1-77a1acbd656c

## Tech Stack
- Frontend: React JS with Tailwind CSS
- Backend: Django with REST Framework
- Database: SQLite3

## How To Run
### Backend Setup (API)
1. Make sure you are in backend directory and if not use `cd backend`.
2. Also ensure you have `Django` and `djangorestframework` installed.
  ```python
  python manage.py migrate
  python manage.py runserver
  ```
3. Load sample data (Optional).
  ```python
  python manage.py loadsampledata
  ```
### Frontend Setup
1. Make sure you are in frontend directory and if not use `cd frontend`.
2. Also, ensure you have the latest `node` version installed
   ```bash
   npm install
   npm run dev
   ```
### There you go!
- Open the localhost (default port: `5173`) to interact with our app.
