# 🚀 PlacementReady | Engineering Prep Ecosystem

A premium, high-fidelity platform designed for CS engineers to master core subjects and ace technical interviews. Built with React + Vite + Framer Motion.

## 💎 Features
- **Ultra-Premium UI/UX**: Glassmorphic design with advanced mesh gradients and micro-animations.
- **Syllabus Explorer**: Comprehensive notes for DBMS, OS, OOPs, and more.
- **Interactive Practice**: MCQ engine with real-time feedback and explanation.
- **GFG/W3Style Sidebar**: Professional tutorial navigation for deep learning.
- **Developer Brand**: Integrated LinkedIn, X, and GitHub connectivity.

---

## 🚀 Deployment Guide

### 1. Vercel (Recommended for Frontend)
This project is optimized for Vercel with a `vercel.json` for SPA routing.
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Connection**: Connect your GitHub repo to Vercel, and it will auto-deploy.

### 2. Render (Static Site)
To host on Render as a Static Site:
1. Create a "Static Site" on Render.
2. Connect your GitHub repository.
3. Set **Build Command** to `npm run build`.
4. Set **Publish Directory** to `dist`.
5. Under **Redirects/Rewrites**, add: 
   - Source: `/*`
   - Destination: `/index.html`
   - Action: `Rewrite`

---

## 🛠️ Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Created by **Prince Yadav**.
Connect on [LinkedIn](https://www.linkedin.com/in/prince-yadav-4t/) | [X (Twitter)](https://x.com/prince__up)
