import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useTransactions } from '../../contexts/TransactionContext';
import { calculateTotalExpenses, groupByCategory } from '../../utils/calculations';
import { formatCurrency } from '../../utils/formatting';
import { GlassCard } from '../common/GlassCard';

const COLORS = ['#f59e0b', '#0ea5e9', '#8b5cf6', '#ef4444', '#10b981'];
const ICONS = {
  'Transport': '🚗',
  'Shopping': '🛍️',
  'Groceries': '🛒',
  'Dining': '🍔'
};

export const BudgetBreakdownCard = () => {
  const { transactions } = useTransactions();
  const expenses = calculateTotalExpenses(transactions);
  const data = useMemo(() => groupByCategory(transactions).slice(0, 4), [transactions]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ background: 'var(--glass-bg-strong)', backdropFilter: 'blur(20px)', border: '1px solid var(--border-glass)', borderRadius: '8px', padding: '6px 12px', color: 'var(--text-primary)', fontSize: '0.75rem' }}>
          <p style={{ margin: 0, fontWeight: 600 }}>{payload[0].name}</p>
          <p style={{ margin: 0, color: 'var(--text-secondary)' }}>₹{payload[0].value.toFixed(2)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <GlassCard style={{ padding: '24px', background: 'var(--glass-bg)', backdropFilter: 'blur(28px)', borderRadius: '24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '24px' }}>Budget Breakdown</h3>
      
      <div style={{ height: '160px', width: '100%', position: 'relative' }}>
         <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
             <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>{formatCurrency(expenses)}</div>
             <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Spent this month</div>
         </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={70}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
              cornerRadius={4}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
         {data.map((item, idx) => (
             <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                     <div style={{ width: 36, height: 36, borderRadius: '10px', background: COLORS[idx % COLORS.length], color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                         {ICONS[item.name] || '📦'}
                     </div>
                     <div>
                         <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.name}</div>
                         <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{((item.value / expenses) * 100).toFixed(0)}% of expenses</div>
                     </div>
                 </div>
                 <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>₹{item.value.toFixed(0)}</div>
             </div>
         ))}
      </div>
    </GlassCard>
  );
};
