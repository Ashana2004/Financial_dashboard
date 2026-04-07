#  Finance Dashboard UI

A modern, interactive personal finance dashboard built to demonstrate strong frontend development skills, clean architecture, and thoughtful user experience design.

---

##  Live Demo
🔗 https://financialdashboard-ruddy.vercel.app/  
 

---

##  Screenshots

###  Dashboard Overview

<img width="1919" height="916" alt="image" src="https://github.com/user-attachments/assets/f9d63df1-b780-4230-b376-ebe7367e0723" />


---

###  Transactions Page

<img width="1917" height="911" alt="image" src="https://github.com/user-attachments/assets/edb23899-0de3-4603-bd90-1fa9292a58af" />


---

###  Insights Section

<img width="1919" height="908" alt="image" src="https://github.com/user-attachments/assets/2731f186-216a-458a-ae8f-2cc8d11d43fc" />


---

###  Investment

<img width="1919" height="912" alt="image" src="https://github.com/user-attachments/assets/921cfd5b-7165-41f0-a898-4f9a12b91e90" />


---

##  Overview

This project simulates a real-world finance dashboard where users can:
- Track their financial summary
- Manage and explore transactions
- Understand spending patterns through visual insights

The focus of this project is not just functionality, but **how data is presented, structured, and interacted with**.

---

##  Features

###  Dashboard Overview
- Summary cards for:
  - Total Balance  
  - Income  
  - Expenses  
  - Net Cash Flow  
- Dynamic balance trend chart (auto-calculated from transactions)
- Category-based spending visualization

---

###  Transactions Management
- Detailed transaction list including:
  - Date  
  - Amount  
  - Category  
  - Type (Income/Expense)  
- Features:
  -  Search functionality  
  -  Category filtering  
  -  Color-coded tags for better readability  

---

###  Role-Based UI (Frontend Simulation)
- Toggle between:
  - **Admin** → Add, Edit, Delete transactions  
  - **Viewer** → Read-only access  
- Demonstrates real-world UI behavior without backend complexity

---

###  Insights Section
- Automatically generated insights based on transaction data:
  - Highest spending category  
  - Monthly comparisons  
  - Smart observations  

> Note: Insights are generated using rule-based logic to simulate intelligent analysis.

---

###  Dark / Light Mode
- Seamless theme switching  
- Glassmorphic UI adapted for both modes  
- User preference persists across sessions  

---

###  State Management & Persistence
- Managed using **React Context API**
- Data persisted using **localStorage**
- Ensures:
  - No data loss on refresh  
  - Consistent user experience  

---

##  Technical Approach

###  Tech Stack
- **React (Vite)**
- **JavaScript**
- **Recharts**
- **Lucide React**
- **Custom CSS (Glassmorphism UI)**

---

###  Architecture Decisions

- Component-based modular structure  
- Context API for centralized state  
- Derived data for charts and insights  

---

###  UI Design Philosophy

- Glassmorphism (frosted glass effect)
- Clean and minimal layout
- Focus on usability and clarity

---

##  Trade-offs

- Used Context instead of Redux for simplicity  
- No backend to keep focus on frontend  
- Rule-based insights instead of AI  

---

##  Responsiveness

- Fully responsive across devices  



---

##  Future Improvements

- Backend integration
- Authentication system
- AI-powered insights
- Export functionality

---

## 🛠️ Setup & Installation

```bash
git clone https://github.com/Ashana2004/Financial_dashboard
cd Financial_dashboard
npm install
npm run dev
