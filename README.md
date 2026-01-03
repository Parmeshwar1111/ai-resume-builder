# AI Resume Builder

A full-stack AI-powered Resume Builder application that allows users to create professional resumes using multiple templates, preview them in real time, and download them as high-quality PDF files.

This project is built using a modern **full-stack architecture** with:
- **React** for frontend UI
- **Node.js** for PDF generation service
- **Spring Boot** for backend business logic and data handling

--- 
 
## 📁 Project Structure 
ai-resume-builder/
│
├── resume_frontend/ # React frontend
├── resume-ai-backend/ # Spring Boot backend
├── resume-pdf-service/ # Node.js PDF generation service
├── .gitignore
└── README.md


---

## 🚀 Features

- Interactive resume builder UI
- Multiple professional resume templates
- Live resume preview
- Download resume as PDF
- Clean and responsive design
- Separation of concerns using microservice-style architecture

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- HTML5, CSS3
- Tailwind CSS / DaisyUI
- Framer Motion (animations)

### Backend (Business Logic)
- Spring Boot
- Java
- REST APIs
- JPA / Hibernate
- MySQL (or any relational database)

### PDF Service
- Node.js
- Express.js
- Puppeteer / html2canvas
- jsPDF

---

## 🧠 Architecture Explanation

This project follows a **multi-service architecture** where each part has a clear responsibility.

### 1️⃣ React Frontend (`resume_frontend`)
- Handles user interaction and UI
- Collects resume data through forms
- Shows live preview of resume templates
- Sends resume data to backend services
- Triggers PDF generation

### 2️⃣ Spring Boot Backend (`resume-ai-backend`)
- Manages core backend logic
- Handles user-related operations (future scope)
- Manages database operations
- Provides REST APIs for frontend
- Ensures clean separation of business logic

### 3️⃣ Node.js PDF Service (`resume-pdf-service`)
- Dedicated service for PDF generation
- Converts rendered resume HTML into PDF
- Uses Puppeteer / html2canvas for accurate layout
- Keeps heavy PDF processing separate from main backend

### 🔁 Overall Workflow
User → React Frontend
→ Spring Boot Backend (data & logic)
→ Node.js PDF Service (PDF generation)
→ PDF downloaded by user


## ▶️ How to Run the Project Locally

### 1️⃣ Run Frontend (React)

cd resume_frontend

npm install

npm run dev

###2️⃣ Run PDF Generation Service (Node.js)

cd resume-pdf-service

npm install

npm start

###3️⃣ Run Backend Service (Spring Boot)

cd resume-ai-backend

mvn spring-boot:run

