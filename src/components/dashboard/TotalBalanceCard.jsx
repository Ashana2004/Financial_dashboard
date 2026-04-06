import React, { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useTransactions } from '../../contexts/TransactionContext';
import { getDailyBalance } from '../../utils/calculations';
import { GlassCard } from '../common/GlassCard';

export const TotalBalanceCard = ({ balance }) => {
  const { transactions } = useTransactions();
  const balanceData = useMemo(() => getDailyBalance(transactions, 30), [transactions]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ background: 'var(--glass-bg-strong)', backdropFilter: 'blur(20px)', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '8px', color: 'var(--text-primary)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', fontSize: '0.75rem' }}>
          <p style={{ margin: 0, fontWeight: 600 }}>₹{payload[0].value.toFixed(2)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <GlassCard style={{ padding: '16px 20px', background: 'var(--glass-bg)', backdropFilter: 'blur(28px)', borderRadius: '20px', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Total Balance</h3>
        <span style={{ color: 'var(--text-tertiary)' }}>⋮</span>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>{balance}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--success-glass)', fontWeight: 500 }}>+₹19,999.00 (61,925.8%)</div>
        </div>
        <button style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--text-primary)', color: 'white', border: 'none', fontSize: '1.25rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginTop: '16px', marginBottom: '16px' }}>
        {['1D', '1W', '1M', '3M', 'YTD', 'ALL'].map(period => (
          <button key={period} style={{
            padding: '2px 8px',
            borderRadius: '12px',
            border: period === '1D' ? '1px solid var(--border-glass)' : 'none',
            background: period === '1D' ? 'var(--glass-bg-strong)' : 'transparent',
            color: period === '1D' ? 'var(--text-primary)' : 'var(--text-tertiary)',
            fontSize: '0.7rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            {period}
          </button>
        ))}
      </div>

      <div style={{ height: '100px', width: '100%', position: 'relative' }}>
         {/* Contextual insight tooltip bubble */}
         <div style={{ 
            position: 'absolute', 
            left: '50%', 
            top: '20px',
            transform: 'translateX(-50%)',
            background: 'var(--glass-bg-strong)', 
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--border-glass)',
            padding: '12px 16px', 
            borderRadius: '12px',
            boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
            maxWidth: '220px',
            fontSize: '0.75rem',
            color: 'var(--text-primary)',
            lineHeight: 1.5,
            zIndex: 10,
            textAlign: 'center'
          }}>
             Building wealth takes time. Your balance graph takes a week to populate.
          </div>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={balanceData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
             <defs>
              <linearGradient id="colorGray" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="balance" stroke="var(--text-secondary)" strokeWidth={2} fill="url(#colorGray)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: '24px', borderTop: '1px solid var(--border-glass)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between' }}>
         <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>Assets</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>₹25,360</div>
         </div>
         <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>Liabilities</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>₹0</div>
         </div>
      </div>

      <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
         <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--glass-bg-hover)', borderRadius: '12px', fontSize: '0.875rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontWeight: 500 }}><div style={{ width: 8, height: 8, borderRadius: '2px', background: '#84cc16' }}></div>Investments</div>
            <div style={{ color: 'var(--text-secondary)' }}>₹3,400 ˅</div>
         </div>
         <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--glass-bg-hover)', borderRadius: '12px', fontSize: '0.875rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontWeight: 500 }}><div style={{ width: 8, height: 8, borderRadius: '2px', background: '#0ea5e9' }}></div>Other</div>
            <div style={{ color: 'var(--text-secondary)' }}>₹24,530 ˅</div>
         </div>
      </div>
    </GlassCard>
  );
};
