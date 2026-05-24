# Architecture Overview

## 1. Frontend
- Built using Next.js (App Router)
- Pages:
  - Login Page (/login)
  - Main Dashboard (/)

## 2. Components
- Login Form:
  - Takes username input
  - Stores user in localStorage
- Audit Form:
  - Takes tool, plan, spend, users, use case
  - Runs audit logic and displays result

## 3. State Management
- React useState used for form inputs and result
- localStorage used for storing logged-in user

## 4. Routing & Navigation
- useRouter from Next.js used for navigation
- Protected route:
  - If no user in localStorage → redirect to /login

## 5. Authentication (Basic)
- Simple client-side authentication using localStorage
- Login stores user
- Logout removes user and redirects

## 6. Business Logic
- Spend analysis based on input:
  - >100 → High spending
  - >50 → Moderate spending
  - ≤50 → Optimized

## 7. Validation
- Prevents form submission if fields are empty
- Displays warning message

## 8. UI
- Centered card layout
- Input fields + button
- Result displayed dynamically

## 9. UX Enhancements (Day 5)
- Added structured result display
- Added visual spending indicator bar
- Improved user feedback with suggestions and savings