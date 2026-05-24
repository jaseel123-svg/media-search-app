# 🎬 Media Search App

A modern and responsive media search application built with React, Redux Toolkit, and Tailwind CSS that allows users to search for **Photos, Videos, and GIFs** from multiple APIs in one place.

---
## 🌐 Live Demo

🚀 Live Website:  
https://media-search-app-3ga2.vercel.app/

---

## 📸 Screenshots

### 🏠 Home Page

<img width="1899" height="961" alt="image" src="https://github.com/user-attachments/assets/b83c91b4-1094-4b7c-8abd-666043aee96f" />


---

### ❤️ Collection Page

<img width="1906" height="926" alt="image" src="https://github.com/user-attachments/assets/50a7d755-ae45-4ead-8136-59ee50ebbc63" />


---

## 🚀 Live Features

✨ Search high-quality Photos  
🎥 Explore trending Videos  
😂 Discover GIFs instantly  
❤️ Save media to your personal Collection  
📌 Persistent localStorage collections  
🔄 Separate pagination for Photos, Videos & GIFs  
⚡ Fast and optimized loading  
📱 Fully responsive UI  
🔥 Toast notifications  
🎨 Smooth modern UI with Tailwind CSS  

---

# 🖼️ Preview

## Home Page
- Search media instantly
- Switch between Photos / Videos / GIFs
- Responsive media grid layout

## Collection Page
- Save favorite media
- Remove media anytime
- Persistent storage using localStorage

---

# 🛠️ Tech Stack

### Frontend
- React
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Axios
- React Toastify

### APIs Used
- Unsplash API
- Pexels API
- Giphy API

---

# ⚡ Performance Optimizations

✅ Lazy Loading Images  
✅ Optimized Image Sizes  
✅ Pagination System  
✅ Faster Media Rendering  
✅ Skeleton Loading UI  
✅ LocalStorage Persistence  

---

# 📂 Project Structure

```bash
src
│
├── api
│   └── MediaApi.js
│
├── components
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── Tabs.jsx
│   ├── ResultGrid.jsx
│   ├── ResultCard.jsx
│   ├── CollectionCard.jsx
│   └── Pagination.jsx
│
├── pages
│   ├── HomePage.jsx
│   └── CollectionPage.jsx
│
├── redux
│   ├── store.js
│   └── features
│       ├── searchSlice.js
│       └── collectionSlice.js
│
└── App.jsx
