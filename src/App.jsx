import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { TransactionProvider } from './contexts/TransactionContext';

// Layout
import { Sidebar } from './components/layout/Sidebar';
import { TopControls } from './components/layout/TopControls';

// Dashboard Components
import { TotalBalanceCard } from './components/dashboard/TotalBalanceCard';
import { NetCashFlowCard } from './components/dashboard/NetCashFlowCard';
import { BudgetBreakdownCard } from './components/dashboard/BudgetBreakdownCard';
import { TransactionsSection } from './components/dashboard/TransactionsSection';

// Right sidebar
import { SpendingInlineCard, InvestmentPortfolioCard } from './components/dashboard/RightSidebarWidgets';
import { LatestTransactionsCard } from './components/dashboard/LatestTransactionsCard';
import { InvestmentsPage, GrowthPage, InsightsPage, ProfilePage } from './components/pages/PlaceholderPages';

import { useTransactions } from './contexts/TransactionContext';
import { calculateBalance } from './utils/calculations';
import { formatCurrency } from './utils/formatting';

function DashboardGrid() {
   const { transactions } = useTransactions();
   const totalBalance = formatCurrency(calculateBalance(transactions));

   return (
       <div className="dashboard-grid animate-fade-in-up">
            
            {/* Main Central Column */}
            <div className="dashboard-col-left">
                <TotalBalanceCard balance={totalBalance} />

                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h2 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Favourites</h2>
                        <button className="glass-button" style={{ padding: '4px 12px', fontSize: '0.75rem', borderRadius: '12px' }}>EDIT</button>
                    </div>
                    <div className="dashboard-metrics-grid">
                        <NetCashFlowCard />
                        <BudgetBreakdownCard />
                    </div>
                </div>

                {/* Real interactive transactions table positioned bottom as requested */}
                <div style={{ marginTop: '16px' }}>
                    <TransactionsSection />
                </div>
            </div>

            {/* Right Narrow Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <LatestTransactionsCard />
                <SpendingInlineCard />
                <InvestmentPortfolioCard />
            </div>

       </div>
   );
}


function App() {
  const [currentView, setCurrentView] = React.useState('spendings');

  const renderView = () => {
    switch(currentView) {
      case 'investments': return <InvestmentsPage />;
      case 'growth': return <GrowthPage />;
      case 'insights': return <InsightsPage />;
      case 'profile': return <ProfilePage />;
      case 'spendings':
      default:
        return <DashboardGrid />;
    }
  };

  return (
    <ThemeProvider>
      <AuthProvider>
        <TransactionProvider>
          <div className="gradient-background app-layout">
            
            <Sidebar currentView={currentView} setCurrentView={setCurrentView} />

            <div className="app-main">
              <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <TopControls setCurrentView={setCurrentView} />
                {renderView()}
              </div>
            </div>
          </div>
        </TransactionProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
