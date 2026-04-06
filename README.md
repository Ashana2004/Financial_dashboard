# Finance Dashboard UI

A beautifully designed, interactive personal finance dashboard built to evaluate frontend development capabilities.

## Features

This project fulfills all the core requirements and most optional enhancements of the internship assignment:

1. **Dashboard Overview**: Highly stylized glassmorphic summary cards (Total Balance, Income, Expenses, Net Cash Flow). Features an interactive, auto-calculating `Total Balance` chart powered by Recharts.
2. **Transactions Engine**: Fully fleshed chronological transaction list with filtering, category tagging, search routines, and colored pill decorators.
3. **Role-Based Access Control (RBAC)**: A live frontend toggle simulates RBAC. `Admin` exposes the Add/Edit/Delete modals, while `Viewer` restricts the app to read-only mode gracefully.
4. **AI Insights Engine**: A dedicated Insights routing tab autonomously parses your mock data to determine Highest Spending Categories, Monthly comparisons, and provides smart alerts.
5. **State Management & Persistence**: Uses React Context + `localStorage`. If you create a transaction, log out, reload, or change your theme, the state persists flawlessly in your browser.
6. **Dark / Light Mode**: A robust context-driven theme engine toggles deep Slate-950 dark glassmorphism and pristine Cyan/Orange light milk-glass aesthetics.

## Approach & Design Decisions

- **Glassmorphism Aesthetic**: I strictly opted for a translucent "frosted glass" interface (leveraging intensive CSS `backdrop-filter` rules) layered over a fluid gradient background. This directly elevates visual quality past standard corporate "flat" designs.
- **Component Componentization**: The UI is intensely modular. The Left Sidebar, Top Navigation, and individual graph widgets are strictly separated. 
- **Mock Data Dynamics**: Instead of hardcoding graph shapes, all visual widgets calculate natively off the `TransactionContext`.

## Setup & Run Instructions

Ensure you have Node.js installed.

1. Clone or download the repository.
2. Run `npm install` to install dependencies (React, Recharts, Lucide-React).
3. Run `npm run dev` to start the Vite development server.
4. Open the displayed local URL (typically `http://localhost:5173`).

Enjoy exploring both Dark and Light modes!
