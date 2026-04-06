import { useTransactions } from '../../contexts/TransactionContext';
import { calculateTotalExpenses, calculateTotalIncome, groupByCategory } from '../../utils/calculations';
import { formatCurrency } from '../../utils/formatting';
import { GlassCard } from '../common/GlassCard';

export const InvestmentsPage = () => {
  return (
    <div className="animate-fade-in-up" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Investment Portfolio</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Detailed overview of your current stock and mutual fund allocations.</p>
      </div>
      
      <div className="dashboard-metrics-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <GlassCard style={{ padding: '24px', background: 'var(--glass-bg)', backdropFilter: 'blur(28px)', borderRadius: '20px' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Mutual Funds</h3>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>₹2,45,000</div>
          <div style={{ marginTop: '8px', fontSize: '0.875rem', color: '#10b981', fontWeight: 600 }}>+12.4% YoY</div>
        </GlassCard>

        <GlassCard style={{ padding: '24px', background: 'var(--glass-bg)', backdropFilter: 'blur(28px)', borderRadius: '20px' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Direct Equity</h3>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>₹8,90,500</div>
          <div style={{ marginTop: '8px', fontSize: '0.875rem', color: '#10b981', fontWeight: 600 }}>+24.1% YoY</div>
        </GlassCard>

        <GlassCard style={{ padding: '24px', background: 'var(--glass-bg)', backdropFilter: 'blur(28px)', borderRadius: '20px' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Fixed Deposits</h3>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>₹5,00,000</div>
          <div style={{ marginTop: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 600 }}>7.1% Fixed</div>
        </GlassCard>
      </div>

      <GlassCard style={{ padding: '32px', background: 'var(--glass-bg)', backdropFilter: 'blur(28px)', borderRadius: '24px' }}>
        <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '16px' }}>Upcoming SIPs</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid var(--border-glass)' }}>
              <div>
                 <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Nifty 50 Index Fund</div>
                 <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Auto-debit on 5th</div>
              </div>
              <div style={{ fontWeight: 600 }}>₹15,000</div>
           </div>
           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                 <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Small Cap Discovery</div>
                 <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Auto-debit on 12th</div>
              </div>
              <div style={{ fontWeight: 600 }}>₹5,000</div>
           </div>
        </div>
      </GlassCard>
    </div>
  );
};

export const GrowthPage = () => {
  return (
    <div className="animate-fade-in-up" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Wealth Growth</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Track your month-over-month wealth accumulation.</p>
      </div>

      <GlassCard style={{ padding: '32px', background: 'var(--glass-bg)', backdropFilter: 'blur(28px)', borderRadius: '24px' }}>
        <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>Net Worth Trajectory</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.875rem' }}>Your wealth grew by ₹1,45,000 this quarter.</p>
        
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', height: '200px', marginTop: '32px' }}>
           <div style={{ flex: 1, background: 'rgba(14, 165, 233, 0.4)', height: '40%', borderRadius: '8px' }}></div>
           <div style={{ flex: 1, background: 'rgba(14, 165, 233, 0.5)', height: '55%', borderRadius: '8px' }}></div>
           <div style={{ flex: 1, background: 'rgba(14, 165, 233, 0.6)', height: '70%', borderRadius: '8px' }}></div>
           <div style={{ flex: 1, background: 'rgba(14, 165, 233, 0.8)', height: '85%', borderRadius: '8px' }}></div>
           <div style={{ flex: 1, background: '#0ea5e9', height: '100%', borderRadius: '8px', boxShadow: '0 8px 24px rgba(14,165,233,0.3)' }}></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-tertiary)', fontSize: '0.75rem', marginTop: '16px' }}>
           <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>May</span>
        </div>
      </GlassCard>
    </div>
  );
};

export const InsightsPage = () => {
  const { transactions } = useTransactions();
  
  const expenses = calculateTotalExpenses(transactions);
  const income = calculateTotalIncome(transactions);
  
  const categories = groupByCategory(transactions);
  const highestCategory = categories.length > 0 ? categories[0] : { name: 'None', value: 0 };
  
  const savingsRate = income > 0 ? ((income - expenses) / income) * 100 : 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--text-primary)' }}>AI Insights Dashboard</h2>
      <p style={{ color: 'var(--text-secondary)' }}>Algorithmic analysis of your financial behavior.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <GlassCard style={{ padding: '32px', background: 'var(--glass-bg)', backdropFilter: 'blur(28px)', borderRadius: '24px' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '16px' }}>Highest Spending Category</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--danger-glass)', marginBottom: '8px' }}>
            {highestCategory.name}
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            You spent {formatCurrency(highestCategory.value)} on {highestCategory.name} this period. This makes up {expenses > 0 ? ((highestCategory.value / expenses) * 100).toFixed(1) : 0}% of your total expenses. Consider reviewing subscriptions or recurring costs in this category.
          </p>
        </GlassCard>

        <GlassCard style={{ padding: '32px', background: 'var(--glass-bg)', backdropFilter: 'blur(28px)', borderRadius: '24px' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '16px' }}>Monthly Comparison</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: savingsRate > 20 ? 'var(--success-glass)' : 'var(--warning-glass)', marginBottom: '8px' }}>
            {savingsRate.toFixed(1)}% Saved
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Your total income was {formatCurrency(income)} and your expenses were {formatCurrency(expenses)}. 
            {savingsRate > 20 
              ? " Excellent job! You are saving over 20% of your income, which is the recommended target."
              : " You are falling below the recommended 20% savings target. Try to reduce discretionary spending."}
          </p>
        </GlassCard>
      </div>

      <GlassCard style={{ padding: '32px', background: 'var(--glass-bg)', backdropFilter: 'blur(28px)', borderRadius: '24px' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '16px' }}>Actionable Observation</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Based on your recent transaction flow, your primary cash drain occurs mid-week. Setting automated transfers to a savings account on Mondays can help artificially restrict available capital and limit impulse purchases.
          </p>
      </GlassCard>
    </div>
  );
};

export const ProfilePage = () => (
  <GlassCard style={{ padding: '32px', background: 'var(--glass-bg)', backdropFilter: 'blur(28px)', borderRadius: '24px' }}>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px' }}>Profile & Settings</h2>
    <p style={{ color: 'var(--text-secondary)' }}>Manage your personal details, role, and application preferences here.</p>
    <div style={{ marginTop: '24px', height: '100px', background: 'rgba(255,255,255,0.4)', borderRadius: '16px' }}></div>
  </GlassCard>
);
