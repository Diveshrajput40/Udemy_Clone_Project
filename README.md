<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->



# React Mini Assignment – Udemy EdTech Clone 

This is a small Udemy clone project built with **React**, **Vite**, **Tailwind CSS**, **React Router v6**, and **Framer Motion / GSAP**.  
The purpose of this project is to test **React fundamentals**, routing, state management basics, animations, and UI skills.

---

## Demo

**Home Page:** `/`  
**Login Page:** `/login`  
**Course Page (Protected):** `/courses`  

---

## Features

### 1. Home Page (Public)
- Simple Home Page that describes the “company” in 2–3 lines.
- Navbar with a **Login** button.
- Small animation implemented using **GSAP / Framer Motion**.

### 2. Login / Logout Functionality (Dummy)
- Dummy credentials:  

Email: test@test.com
Password: 123456

- After login → redirect to **Course Page**.
- On logout → redirect back to **Home Page**.
- Login state managed using **React Context** or **useState**.

### 3. Course Page (Private / Protected)
- Only accessible after login.
- Grid layout showing dummy courses (6–8 items) with:
- Course name
- Thumbnail
- Short description
- **Framer Motion hover animation** on course cards.

### Bonus (Optional)
- Loading animation
- Save login state in **localStorage**
- Course details modal

---

## Tech Stack
- **React + Vite**
- **Tailwind CSS**
- **React Router v6**