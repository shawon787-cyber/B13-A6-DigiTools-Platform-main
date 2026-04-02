# 🚀 Digital Tools - React + Vite Project

**Digital Tools** is a modern, responsive React web application built with **Vite**. It demonstrates an interactive product showcase with a dynamic cart, ratings, pricing sections, and smooth UI interactions. This project is ideal for learning React, state management, Tailwind CSS styling, and Vite development setup.

---

## 🛠️ Technology Stack

This project uses the following technologies:

- **React.js** – For building dynamic UI components and managing state  
- **Vite** – Fast development server with HMR (Hot Module Replacement)  
- **Tailwind CSS** – For modern styling, responsive layout, and hover effects  
- **React Toastify** – For notifications when adding/removing products from the cart  
- **Lucide-react** – For beautiful SVG icons  
- **React Hooks (`useState`)** – For managing cart state and component interactivity  

---

## ⚡ Vite + React Template Notes

This project was bootstrapped using the **Vite React template**, which provides a minimal setup for React with HMR and ESLint rules.

Official plugins available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) – uses [Oxc](https://oxc.rs)  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) – uses [SWC](https://swc.rs)  

**Note:** The React Compiler is not enabled in this template due to dev/build performance. To enable it, see [React Compiler Documentation](https://react.dev/learn/react-compiler/installation).  

For production apps, it is recommended to use **TypeScript** with type-aware ESLint rules. Check [React + TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for integration details.  

---

## ✨ Project Features

1. **Dynamic Product Cart**  
   - Add products to the cart with real-time updates  
   - Prevent duplicate additions  
   - Toast notifications for actions  

2. **Interactive Product Cards**  
   - Gradient buttons with hover effects  
   - Product tags: Popular, New, Best-seller  
   - Product description, price, subscription period, and features  

3. **Landing Page Sections**  
   - Hero Section for main landing  
   - Rating Section to show user/product ratings  
   - Started Section: Step-by-step guide  
   - Pricing Section: Show pricing plans  
   - Footer Section: Contact & links  

4. **Responsive Design**  
   - Works perfectly on mobile, tablet, and desktop screens  

5. **Notifications & Feedback**  
   - React Toastify notifications  
   - Disabled state on buttons after adding to cart  
