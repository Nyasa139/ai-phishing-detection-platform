# 🛡️ AI-Inspired Phishing Detection Platform

An AI-inspired cybersecurity web application built using **Java Spring Boot, React, and PostgreSQL** that helps users detect suspicious URLs and phishing emails using heuristic risk analysis, keyword-based threat detection, and cybersecurity-inspired scanning logic.

---
# 🌐 Live Project

🔗 Frontend:
https://ai-phishing-detection-platform-8fwi.vercel.app/login

🔗 Backend:
https://ai-phishing-backend-1o8c.onrender.com

# Features

## Authentication System

* User Registration
* User Login
* Spring Security Integration
* REST API Architecture

---

##  URL Phishing Scanner

Detects suspicious URLs using:

* HTTPS verification
* Suspicious keyword analysis
* Risk scoring logic
* Threat classification

Example:

```text
http://secure-bank-login.com
```

Output:

```text
Risk Score: 70%
Status: HIGH RISK
```

---

##  Email Phishing Analyzer

Analyzes suspicious email content using:

* Scam keyword detection
* Urgent language analysis
* Credential request identification
* Risk scoring system

Example:

```text
Urgent! Verify your bank password immediately.
```

---

##  Dashboard & Scan History

* Stores scan reports in PostgreSQL
* Fetches previous scan history
* Displays phishing analysis results
* Real-time frontend-backend communication

---

#  Detection Method Used

Instead of using a fully trained AI/ML model, this project currently uses an **AI-inspired heuristic and rule-based phishing detection system**.

The platform analyzes suspicious URLs and email content using:

* Keyword-based threat detection
* HTTPS verification
* Risk scoring logic
* Suspicious pattern analysis
* Cybersecurity-inspired heuristics

This approach simulates the early-stage logic used in many real-world phishing detection systems before advanced machine learning models are applied.

Example detection checks include:

* Presence of phishing-related keywords such as:

  * `login`
  * `verify`
  * `bank`
  * `secure`
  * `password`
  * `click here`
* Detection of non-HTTPS URLs
* Identification of urgent or credential-related language in emails

Based on these checks, the system generates:

* Risk Score
* Threat Classification
* Detection Status

This makes the project lightweight, fast, beginner-friendly, and practical for understanding how phishing detection pipelines work internally.

---

#  Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios

## Backend

* Java Spring Boot
* Spring Security
* REST APIs
* JPA/Hibernate

## Database

* PostgreSQL

## Tools

* Postman
* Git & GitHub
* pgAdmin

---

# Project Structure

```text
ai-phishing-detection-platform/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── index.css
│
├── backend/
│   └── phishingdetector/
│       ├── controller/
│       ├── dto/
│       ├── model/
│       ├── repository/
│       ├── config/
│       └── service/
│
├── README.md
└── .gitignore
```

---

# Backend Architecture

```text
Frontend (React)
        ↓
 REST API Requests
        ↓
Spring Boot Backend
        ↓
Threat Analysis Logic
        ↓
PostgreSQL Database
```

---

# URL Detection Workflow

```text
User Enters URL
        ↓
Frontend Sends Request
        ↓
Spring Boot Backend Receives URL
        ↓
Checks:
 - HTTPS Security
 - Suspicious Keywords
 - URL Patterns
        ↓
Risk Score Generated
        ↓
Threat Status Assigned
        ↓
Stored in PostgreSQL
        ↓
Results Displayed on Dashboard
```

---

# Email Detection Workflow

```text
User Pastes Email Content
        ↓
Frontend Sends API Request
        ↓
Backend Processes Email
        ↓
Checks:
 - Urgent Language
 - Scam Keywords
 - Credential Requests
 - Suspicious Phrases
        ↓
Risk Score Calculated
        ↓
Threat Level Generated
        ↓
Saved to Database
        ↓
Displayed to User
```

---

#  REST APIs

## Authentication APIs

### Register

```http
POST /api/auth/register
```

### Login

```http
POST /api/auth/login
```

---

## Scanning APIs

### URL Scanner

```http
POST /api/scan/url
```

### Email Scanner

```http
POST /api/scan/email
```

---

## History API

### Fetch Scan History

```http
GET /api/history
```

---

# Screenshots

## Dashboard

<img width="1896" height="862" alt="image" src="https://github.com/user-attachments/assets/ea52b91c-7f8a-4e47-9b86-51d71d5bb609" />


## URL Scanner

<img width="1887" height="879" alt="image" src="https://github.com/user-attachments/assets/f75e0301-1d7c-4326-ac64-e60126a94429" />



## Email Analyzer

<img width="1903" height="815" alt="image" src="https://github.com/user-attachments/assets/ed62e0e7-9432-46f6-9d7f-f30b7ef4c9b4" />


---

#  Running Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

#  Running Backend

```bash
cd backend/phishingdetector/phishingdetector
.\mvnw.cmd spring-boot:run
```

Backend runs on:

```text
http://localhost:8081
```

---

# PostgreSQL Configuration

Inside:

```text
src/main/resources/application.properties
```

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/phishing_detector
spring.datasource.username=postgres
spring.datasource.password=your_password
```

---

#  API Testing

APIs were tested using:

* Postman
* PostgreSQL
* pgAdmin

---

#  Future Improvements

* JWT Authentication
* Password Encryption
* VirusTotal API Integration
* Google Safe Browsing API
* Machine Learning phishing classifiers
* NLP-based email analysis
* Threat analytics dashboard
* Docker deployment
* Cloud hosting

---

#  Author

## Nyasa139

GitHub:
[Nyasa139 GitHub](https://github.com/Nyasa139?utm_source=chatgpt.com)

---

# ⭐ If you liked this project

Give this repository a star ⭐
