📌 Project Overview

Lupin Website is a modern, responsive web application built with React and Vite.
It showcases hero sections, adventure packages, Christmas offers, and product listings, following a clean and animated UI layout.

This project is part of Lupin Ventures, aiming to provide high-quality UI experiences with fast performance and clean code structure.

🚀 Features

⚡ Fast development using Vite

🎨 Beautiful hero section with image sliders

📊 Stats section floating on the hero

🖼️ Image-based sections such as “About” and “Products”

🎁 Christmas offer packages

📱 Fully responsive layout (SM, MD, LG breakpoints)

🌙 Dark theme support (optional)

🔧 Modular React components for scalability

🗂️ Project Structure
lupin-website/
│── public/
│── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Choice.jsx
│   │   └── Footer.jsx
│   ├── assets/
│   │   └── images/
│   ├── App.jsx
│   └── main.jsx
│── index.html
│── package.json
│── vite.config.js
└── README.md

🛠️ Installation & Setup
1️⃣ Install dependencies

Make sure you’re inside the project folder:

npm install

2️⃣ Run the development server
npm run dev


This launches the project at:

http://localhost:5173/

3️⃣ Build for production
npm run build

4️⃣ Preview production build
npm run preview

🔗 Deployment

You can deploy this project using:

Vercel (Recommended)

Go to Vercel.com

Import GitHub repo

Deploy instantly

Netlify

Click "New Site → Deploy manually"

Upload the dist/ folder after running npm run build

📷 Image Importing Guide

When adding images inside React:

import heroImg from "../assets/images/hero.png";

<img src={heroImg} alt="Hero Image" />

✔️ Requirements

Node.js 16+

npm or yarn

Basic React knowledge

🙌 Author

John Macharia
Part of the Lupin Ventures project.

📝 License

This project is open-source. You may modify and use it freely.
