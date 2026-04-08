# 📌 Event Board Platform

A web application where users can create, share, and discover upcoming events such as hackathons, quizzes, workshops, and meetups.

---

## 🚀 Project Goal

To build a modular and scalable event platform where each feature is developed independently by team members and later integrated into a unified system.

---

## 🧩 Features

### 📝 1. Event Creation (Form)
- Users can create and submit events
- Fields include:
  - Title
  - Description
  - Date & Time
  - Location
  - Category
- Form validation for required inputs

---

### 🗄️ 2. Backend API
- Handles all data operations
- REST API endpoints:
  - POST /events → Create new event
  - GET /events → Get all events
  - GET /events/:id → Get event details
- Database integration

---

### 📋 3. Event Listing
- Displays all events in a structured format
- Event cards show:
  - Title
  - Date
  - Category

---

### 🔍 4. Search Functionality
- Search events using keywords
- Search by title or description

---

### 🎯 5. Category Filters
- Filter events by type:
  - Hackathon
  - Quiz
  - Meetup
  - Workshop

---

### ⭐ 6. Featured Events
- Highlights important or trending events
- Displayed as banner or carousel

---

### 🎨 7. UI/UX & Integration
- Responsive and clean design
- Integrates all features into one app

---

## 👥 Team Structure

| Member | Feature |
|--------|--------|
| 1 | Event Creation |
| 2 | Backend API |
| 3 | Event Listing |
| 4 | Search |
| 5 | Filters |
| 6 | Featured Events |
| 7 | UI & Integration |

---

## 🔀 GitHub Workflow

### Branch Naming Convention
feature/event-form
feature/backend-api
feature/event-list
feature/search
feature/filter
feature/featured-events
feature/ui-integration

---

## 🔧 Setup

git clone <repo-url>
cd project
npm install
npm run dev

---

## 🏗️ Project Structure

/frontend
  /components
  /pages
/backend
  /routes
  /controllers
  /models

---

## 💡 Future Improvements

- Authentication
- RSVP system
- Notifications

---

## 🏁 Conclusion

A modular team-based event platform built using independent features and GitHub collaboration.
