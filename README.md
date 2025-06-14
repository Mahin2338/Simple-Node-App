# Docker Node Mongo App

This project is the **second app I containerized** as part of my journey into DevOps and backend development.

It’s a simple Node.js + Express web server connected to MongoDB, all running inside Docker containers using `docker-compose`.

---

## 🚀 Why I Built This

I wanted to **solidify my Docker knowledge** by building a real-world, multi-container app from scratch — no tutorials, just doing it and solving problems as they came.

This was a practical follow-up to my first containerized app, and I made sure to really understand each layer this time.

---

## 🔧 Tech Stack

- Node.js (Express)
- MongoDB (official Docker image)
- Docker + Docker Compose

---

## 🧠 What I Learned

- How to write a proper `Dockerfile` for a Node.js app
- How to structure `docker-compose.yml` for multi-container setups
- The difference between `localhost` and container-to-container communication
- Environment variable setup for clean configuration

---

## 🧱 Project Structure

.
├── Dockerfile
├── docker-compose.yml
├── server.js
├── package.json
├── views/
└── README.md

markdown
Copy
Edit

---

## 💥 Challenges I Faced

Here’s a list of **real problems** I hit — and fixed:

### 1. **Node app wouldn’t connect to Mongo**
- I was using `localhost` instead of the service name `mongo`
- Fixed by setting `MONGO_URI=mongodb://mongo:27017`

### 2. **Build kept failing at `npm install`**
- Found out I had a typo: `package*.jason` instead of `package*.json`
- This broke Docker’s ability to find and copy the right files

### 3. **Couldn’t type in the terminal after running `docker-compose up`**
- Realized I was watching logs and needed to run with `-d` (detached mode)

### 4. **Didn’t know if I needed MongoDB auth**
- Learned that the default Docker Mongo setup runs without a password unless I enable it manually

### 5. **GitHub integration**
- First time linking a Docker project to GitHub manually
- Used `git init`, `add`, `commit`, and `push` to publish everything cleanly

---

## 🐳 How to Run

```bash
docker-compose up --build
Then visit:
👉 http://localhost:3000

