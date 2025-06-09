# DevConnector Backend 🚀

A basic backend API built with **Node.js**, **Express**, and **MongoDB**.  
Part of my learning journey to become a professional MERN stack developer.

---

## 📚 Features

✅ Express server setup  
✅ MongoDB connection using Mongoose  
✅ User Model (name, email, password, date)  
✅ REST API:
- `GET /api/users` → Get all users
- `POST /api/users` → Create new user

✅ Tested with Postman  
✅ Deployed to GitHub (Work in Progress)

---

## ⚙️ Setup Instructions

1️⃣ Clone the repo:

```bash
git clone https://github.com/yourusername/devconnector-backend.git
cd devconnector-backend
npm install
MONGO_URI=your_mongo_connection_string_here
PORT=5000
npm run dev


#🔎 API Usage

➤ Get All Users
GET http://localhost:5000/api/users
Response: Array of user objects.

➤ Create New User
POST http://localhost:5000/api/users
Body (JSON): {
  "name": "Tarin",
  "email": "tarin@example.com",
  "password": "123456"
}

#Response
{
  "message": "User created successfully",
  "newUser": {
    "_id": "...",
    "name": "...",
    "email": "...",
    "password": "...",
    "date": "...",
    "__v": 0
  }


✨ Made with ❤️ by Tamim ✨
