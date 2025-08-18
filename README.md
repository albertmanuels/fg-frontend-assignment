# Finology Frontend Assignment - User Management Table App

A modern, responsive user management application built with React and TypeScript. This app displays user data in an interactive table with advanced filtering, searching, and pagination capabilities.

## 🚀 Live Demo

https://finology-frontend-assignment.vercel.app/

## ✨ Features

- **📊 Interactive Data Table**: Built with TanStack Table for powerful data manipulation
- **🔍 Advanced Search**: Real-time search functionality across user data
- **🎯 Multi-Filter Support**: Filter by city, company, and other attributes with faceted counts
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Optimized with React Query for efficient data fetching and caching
- **🎨 Modern UI**: Clean interface using Tailwind CSS and shadcn/ui components
- **🔧 Developer Experience**: ESLint + Prettier for code quality and consistency

## 🛠 Tech Stack

### Frontend
- **[React 19](https://react.dev/)** - UI library
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and developer experience
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library

### Data Management
- **[TanStack Table](https://tanstack.com/table)** - Headless table library for filtering, sorting, and pagination
- **[TanStack React Query](https://tanstack.com/query)** - Server state management and data fetching

### Code Quality
- **[ESLint](https://eslint.org/)** - Code linting and error detection
- **[Prettier](https://prettier.io/)** - Code formatting
- **Custom ESLint Config** - Enforces import ordering, unused imports cleanup, and code standards

### API
- **[JSONPlaceholder](https://jsonplaceholder.typicode.com/)** - Fake REST API for testing and prototyping

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (version 8.0 or higher) or **yarn**

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/albertmanuels/fg-frontend-assignment.git
cd fg-frontend-assignment
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://jsonplaceholder.typicode.com
```

### 4. Start the development server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code analysis |
| `npm run lint:fix` | Fix ESLint errors automatically |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Footer/         # Footer component
│   ├── Header/         # Header component
│   ├── Table/          # Data table components
│   │   ├── components/ # Table sub-components (Filter, Pagination)
│   │   ├── Table.tsx   # Main table component
│   │   ├── Table.types.ts
│   │   └── Table.utils.ts
│   └── ui/            # shadcn/ui components
├── config/            # Configuration files
│   └── environment.ts # Environment variables
├── lib/              # Utility functions
│   └── utils.ts      # Common utilities
├── pages/            # Page components
│   └── HomePage/     # Home page with user table
├── services/         # API services and hooks
    └── hooks/        # Custom React hooks
```
---

Built with ☕️ by Albert using React, TypeScript, and modern web technologies.
