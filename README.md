# Blogs App

A simple full stack blog app where you can create, read, update and delete blogs. Built with Django REST Framework on the backend and React on the frontend.

---

## Live Links

- Frontend: [https://blogs-frontend-yvgq.onrender.com](https://https://blogs-frontend-yvgq.onrender.com/)
- Backend API: [https://django-backend-44d6.onrender.com](https://django-backend-44d6.onrender.com)

Note: The backend is on Render's free tier so it might take around 30 seconds to respond after being idle for a while.

---

## Stack

- React, React Router, Tailwind CSS
- Django, Django REST Framework, Gunicorn, WhiteNoise
- Deployed on Render

---

## Features

- View all blogs
- Create a blog with title, body and author
- Edit and update a blog
- Delete a blog
- View a single detailed blog post

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/blogs/` | Get all blogs |
| POST | `/api/blogs/` | Create a blog |
| GET | `/api/blogs/:id/` | Get a single blog |
| PUT | `/api/blogs/:id/` | Update a blog |
| DELETE | `/api/blogs/:id/` | Delete a blog |

---

## Running Locally

**Backend**
```bash
cd django_rest
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

Set `VITE_API_URL=http://127.0.0.1:8000` in `frontend/.env.development`.

---

Made by [Manoj](https://github.com/manoj-8431)
