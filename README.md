# RagaAI Frontend Assignment: B2B Healthcare Admin Dashboard

A React-based B2B Healthcare Admin Dashboard built with TypeScript, Redux Toolkit, and Radix UI.

## Tech Stack

- **React** 19.2.0
- **TypeScript** 5.9.3
- **Redux Toolkit** 2.11.2
- **Radix UI** ( Dropdown Menu)
- **React Router DOM** 7.12.0
- **Vite** 7.2.4

- ## ScreenShot
<img width="1906" height="912" alt="image" src="https://github.com/user-attachments/assets/aabca0b9-6597-4ac9-8399-bc3cdd1131d4" />

 <img width="1915" height="912" alt="image" src="https://github.com/user-attachments/assets/3689b066-a3f6-4f09-ae04-9c78de513894" />

## Features Implemented

- **Login Page**: Email/password authentication with form validation
- **Home Dashboard**: Protected route with dashboard cards
- **Authentication State**: Managed via Redux Toolkit
- **Dummy Credentials**: `admin@healthcare.com` / `admin123`
- **Dashboard Stats**: Patients, Doctors, Appointments, Clinics from dummy JSON
- **Protected Routes**: Unauthenticated users redirected to login
- **Logout Functionality**: Clears auth state
- **Responsive UI**: Basic responsive design
- **Clean Architecture**: Proper folder structure and TypeScript types

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── DashboardCard.tsx
│   ├── Header.tsx
│   └── ProtectedRoute.tsx
├── data/
│   └── dummyData.ts     # Dummy credentials and dashboard data
├── pages/
│   ├── Home.tsx         # Dashboard page
│   └── Login.tsx        # Login page
├── redux/
│   ├── hooks.ts         # Typed Redux hooks
│   ├── store.ts         # Redux store configuration
│   └── slices/
│       ├── authSlice.ts     # Authentication state management
│       └── dashboardSlice.ts # Dashboard data management
├── styles/              # CSS stylesheets
├── types/               # TypeScript type definitions
└── utils/
    └── validators.ts    # Form validation utilities
```

### Key Files Created/Modified

- ✅ `src/App.tsx` - Main app with routing and Redux provider
- ✅ `src/redux/store.ts` - Redux store with auth and dashboard slices
- ✅ `src/redux/slices/authSlice.ts` - Authentication logic
- ✅ `src/redux/slices/dashboardSlice.ts` - Dashboard data fetching
- ✅ `src/pages/Login.tsx` - Login form with validation
- ✅ `src/pages/Home.tsx` - Dashboard with stats cards
- ✅ `src/components/Header.tsx` - App header with user info and logout
- ✅ `src/components/DashboardCard.tsx` - Reusable stat card component
- ✅ `src/components/ProtectedRoute.tsx` - Route protection wrapper
- ✅ `src/types/index.ts` - TypeScript interfaces
- ✅ `src/data/dummyData.ts` - Dummy data for auth and stats
- ✅ `src/utils/validators.ts` - Form validation functions
- ✅ `src/styles/*.css` - Component-specific styles
- ✅ `README.md` - Project documentation

## Bonus Feature

● Loading states
● Better UI polish implmeneted

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run development server:**

   ```bash
   npm run dev
   ```

## Demo Credentials

- Email: `admin@healthcare.com`
- Password: `admin123`
