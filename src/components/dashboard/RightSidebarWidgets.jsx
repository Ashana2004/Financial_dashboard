import React, { useMemo } from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { useTransactions } from '../../contexts/TransactionContext';
import { GlassCard } from '../common/GlassCard';
import { getDailyBalance } from '../../utils/calculations'; // reusing for stub shape

export const SpendingInlineCard = () => {
   const { transactions } = useTransactions();
   const randomData = useMemo(() => getDailyBalance(transactions, 14), [transactions]); // just for shape

   return (
      <GlassCard style={{ padding: '24px', background: 'var(--glass-bg)', backdropFilter: 'blur(28px)', borderRadius: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
           <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Spending</h3>
           <span style={{ color: 'var(--text-tertiary)' }}>›</span>
        </div>
        <div style={{ textAlign: 'center', margin: '16px 0' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Spent this month</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>₹73,653</div>
        </div>

        <div style={{ height: '80px', width: '100%', position: 'relative' }}>
           <ResponsiveContainer width="100%" height="100%">
             <AreaChart data={randomData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <defs>
                 <linearGradient id="colorSp" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                   <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                 </linearGradient>
               </defs>
               <Area type="monotone" dataKey="balance" stroke="#8b5cf6" strokeWidth={2} fill="url(#colorSp)" />
             </AreaChart>
           </ResponsiveContainer>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'var(--text-tertiary)', marginTop: '8px' }}>
             <span>01</span><span>08</span><span>15</span><span>22</span><span>29</span>
        </div>
      </GlassCard>
   );
};

export const InvestmentPortfolioCard = () => {
    const { transactions } = useTransactions();
    const randomData = useMemo(() => getDailyBalance(transactions, 14).reverse(), [transactions]); // just for shape
 
    return (
       <GlassCard style={{ padding: '24px', background: 'var(--glass-bg)', backdropFilter: 'blur(28px)', borderRadius: '24px' }}>
         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Investments Portfolio</h3>
            <span style={{ color: 'var(--text-tertiary)' }}>›</span>
         </div>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <div>
                 <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Total value</div>
                 <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>₹3.8L</div>
             </div>
             <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '4px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600 }}>0.25% ↓</div>
         </div>
 
         <div style={{ height: '80px', width: '100%', position: 'relative', marginTop: '16px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={randomData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                 <defs>
                  <linearGradient id="colorInv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="balance" stroke="#10b981" strokeWidth={2} fill="url(#colorInv)" />
              </AreaChart>
            </ResponsiveContainer>
         </div>
         <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'var(--text-tertiary)', marginTop: '8px' }}>
             <span>10</span><span>18</span><span>25</span><span>32</span><span>40</span>
         </div>
       </GlassCard>
    );
 };
