# Dept Website – React UI App

A modern, scalable React UI inspired by the **DEPT® agency website**.  
This project demonstrates **clean component architecture**, **configurable layouts**, and **production-ready SCSS styling** using reusable React components.

## 🚀 Tech Stack

- **React** (Functional Components + Hooks)
- **TypeScript**
- **SCSS (Sass)**
- **Vite / CRA**
- **ESLint & Prettier** (optional)

## 📁 Folder Structure
```
src/
├── assets/
│ └── images/
│
├── components/
│ ├── Navbar/
│ │ ├── Navbar.tsx
│ │ └── Navbar.scss
│ │
│ ├── DrawerMenu/
│ │ ├── DrawerMenu.tsx
│ │ └── DrawerMenu.scss
│ │
│ ├── SplitFeatureSection/
│ │ ├── SplitFeatureSection.tsx
│ │ └── SplitFeatureSection.scss
│ │
│ ├── ClientsSection/
│ │ ├── ClientsSection.tsx
│ │ └── ClientsSection.scss
│ │
│ ├── ContactForm/
│ │ ├── ContactForm.tsx
│ │ └── ContactForm.scss
│ │
│ └── Footer/
│ ├── Footer.tsx
│ └── Footer.scss
│
├── styles/
│ ├── _reset.scss
│ ├── _variables.scss
│ ├── _mixins.scss
│ └── global.scss
│
├── pages/
│ └── Home/
│ ├── Home.tsx
│ └── Home.scss
│
├── App.tsx
└── main.tsx
```

## 🧩 Core Components

### 1️⃣ Navbar

**Features**
- Clickable navigation links
- Three-dot menu icon
- Sticky header
- Responsive layout

**Behavior**
- Clicking links scrolls / navigates
- Clicking the 3-dot icon opens the drawer menu

### 2️⃣ Drawer Menu

**Features**
- Full-screen overlay
- Opens from right
- Smooth open / close animation
- Reusable menu config

**Used for**
- Mobile navigation
- Expanded desktop menu

### 3️⃣ Split Feature Section

A reusable editorial-style section with text + image.

**Features**
- Text alignment configurable (`left | right`)
- Supports multiple content items
- Large hero image support
- Fully responsive

**Props**
```ts
interface SplitFeatureProps {
  image: string;
  subtitle?: string;
  title: string;
  textPosition?: 'left' | 'right';
  items: {
    label: string;
    description: string;
  }[];
}
```

## ✅ Prerequisites

Ensure the following are installed:

- **Node.js** `v18+`
- **npm** `v9+` or **yarn**
- **Git**

Check versions:
```bash
node -v
npm -v
```

## Setup, Run & Build

### 📥 Clone the Repository

```
https://github.com/anurodhsingh2021/figma-react-app.git
cd figma-react-app
```

### 📦 Step 2: Install Dependencies

```
npm install
```

### ▶️ Step 3: Run the App (Development)

```
npm run dev
```

### 🏗 Step 4: Build the App (Production)

```
npm run build
```
