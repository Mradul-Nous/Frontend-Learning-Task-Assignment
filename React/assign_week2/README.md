# 🎬 Movie Search App

A simple movie search and category filter application built with **React**, **TypeScript**, and **Redux**.  
This app demonstrates **state management**, **search functionality**, **category filtering**, and **loading states**.

---

## 🚀 Features
- 🔎 **Search movies** by title  
- 🎭 **Filter by categories**: All, Bollywood, Hollywood, South Indian, Anime  
- ⏳ **Loading state** simulated using `setTimeout`  
- 📦 **State management** with Redux (Reducer pattern)  
- 🎨 **Styled with TailwindCSS** for a clean and responsive UI  

---
//////////////////////////////////////////////------NOTE------------//////////////////////////////////////////////////////////
## 📂 Approach  

> ⚡ **Note:** Since external APIs are blocked by IT policies, the app relies on **dummy data** stored locally in `public/movies.json`.  
>  
> 🔹 Data is fetched using `fetch("/movies.json")`  
> 🔹 A **1.5s delay** is introduced with `setTimeout` to simulate a real API call and demonstrate the **loading state**  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

## 🛠️ Tech Stack
- **React (TypeScript)**
- **Redux Toolkit** for state management
- **TailwindCSS** for styling
- **Dummy JSON data** for movies

---


## ⚙️ Installation & Setup
1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/movie-search-app.git
   cd movie-search-app


Install dependencies:

npm install


Start the development server:

npm run dev


Open in browser:

http://localhost:5173