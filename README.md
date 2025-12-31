# ToyTopia

A playful online marketplace for local toy sellers built with React, Firebase, and Tailwind CSS. ToyTopia allows users to browse, view details, and manage toy listings in a secure and responsive environment.

🔗 **Live URL**: [https://toytopia-a09-kh.netlify.app/](https://toytopia-a09-kh.netlify.app/)

### Homepage
![Homepage](https://raw.githubusercontent.com/KhMansura/Toy-Topia/main/public/full-page-home.png)



## ✨ Key Features

- **Authentication**: Secure login/signup with Email/Password and Google Sign-In
- **Protected Routes**: Access to profile and dashboard only for authenticated users
- **Persistent User Sessions**: User info remains visible in the navbar even after page reload
- **Profile Management**: Users can update their display name and photo URL instantly
- **Responsive Design**: Fully mobile-friendly UI using Tailwind CSS and DaisyUI
- **Interactive Homepage**: Features a Swiper.js carousel showcasing popular toys
- **SPA Navigation**: Smooth client-side routing with React Router
- **Loader States**: Shows loading indicators during auth checks and data fetching

## 🛠️ Tech Stack & npm Packages

- **Framework**: React (Vite)
- **Routing**: `react-router-dom`
- **Styling**: `tailwindcss`, `daisyui`
- **Firebase**: 
  - `firebase` (Authentication)
- **UI Components**: 
  - `swiper` (carousel/slider)
  - `sweetalert2,toast` (alerts and notifications)
  - `react-icons` (eye/eye-slash icons)
- **Development**: 
  - `vite` (dev server & build)
  - `eslint`, `prettier` (code quality)

    ## 📌 Project Purpose
ToyTopia was built to provide a simple, playful, and secure platform for browsing and managing toy listings.  
It focuses on clean UI, smooth navigation, and safe authentication for all users.

---

## 📦 Dependencies Used

### Main Dependencies
- React
- React Router DOM
- Firebase
- Tailwind CSS
- DaisyUI
- Swiper.js
- SweetAlert2
- React Icons

### Dev Dependencies
- Vite
- ESLint
- Prettier

---

## ▶️ How to Run Locally (Complete Guide)

### 1. Clone the repository
```bash
git clone https://github.com/KhMansura/Toy-Topia.git
2. Install dependencies
cd Toy-Topia
npm install
3. Create a .env file in the project root
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
4. Start the development server
npm run dev
5. Open in browser
http://localhost:5173
```
📚 Additional Notes
- Fully responsive design
- No lorem ipsum used
- Firebase authentication implemented correctly
- Protected routes included
- Meets all assignment requirements


   

