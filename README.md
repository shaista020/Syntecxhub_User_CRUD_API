# User CRUD API – Syntecxhub Internship Project

This project is developed as part of the **Syntecxhub Internship Program (Project-1)**.  
It implements a **RESTful API** with full CRUD operations for managing a **User** resource using **Node.js, Express.js, and MongoDB (Mongoose)**.

---

## 🚀 Features

- Create a new user  
- Retrieve all users  
- Retrieve a user by ID  
- Update user details  
- Delete a user  
- Input validation for required fields  
- Proper HTTP status codes for responses  
- Tested thoroughly using Postman  

---

## 🛠 Tech Stack

- **Node.js** – JavaScript runtime  
- **Express.js** – Backend framework  
- **MongoDB** – NoSQL database  
- **Mongoose** – MongoDB object modeling  
- **Postman** – API testing  

---

## 📁 Project Structure

Syntecxhub_User_CRUD_API/
│
├── config/
│ └── db.js # MongoDB connection setup
├── controllers/
│ └── userController.js # CRUD logic for User
├── models/
│ └── User.js # User schema
├── routes/
│ └── userRoutes.js # API routes
├── server.js # Entry point
├── package.json
├── .env.example # Example environment variables
└── screenshots/ # Postman test screenshots


---

## ⚙️ Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/shaista020/Syntecxhub_User_CRUD_API.git
cd Syntecxhub_User_CRUD_API
Install dependencies:

npm install


Create a .env file based on .env.example:

PORT=5000
MONGO_URI=your_mongodb_connection_string


Run the server:

npm run dev


API is now running at:

http://localhost:5000/api/users

### 📸 Screenshots

**Create User (POST)**  
![Create User](screenshots/create_user.png)

**Get Users (GET)**  
![Get Users](screenshots/get_users.png)

**Update User (PUT)**  
![Update User](screenshots/update_user.png)

**Delete User (DELETE)**  
![Delete User](screenshots/delete_user.png)
