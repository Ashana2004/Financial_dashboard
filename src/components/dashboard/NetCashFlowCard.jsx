import React from 'react';
import { GlassCard } from '../common/GlassCard';
import { useTransactions } from '../../contexts/TransactionContext';
import { calculateTotalIncome, calculateTotalExpenses } from '../../utils/calculations';
import { formatCurrency } from '../../utils/formatting';

export const NetCashFlowCard = () => {
    const { transactions } = useTransactions();
    const income = calculateTotalIncome(transactions);
    const expenses = calculateTotalExpenses(transactions);
    const net = income - expenses;

    return (
        <GlassCard style={{ padding: '24px', background: 'var(--glass-bg)', backdropFilter: 'blur(28px)', borderRadius: '24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
           <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '24px' }}>Expenses</h3>
           <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>{formatCurrency(expenses)}</div>

           <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '100px', marginBottom: '24px', gap: '8px' }}>
                {/* Simulated bar chart mimicking image */}
                <div style={{ width: '30px', background: 'rgba(255,255,255,0.4)', height: '40%', borderRadius: '8px' }}></div>
                <div style={{ width: '30px', background: 'rgba(255,255,255,0.4)', height: '80%', borderRadius: '8px' }}></div>
                <div style={{ width: '30px', background: '#10b981', height: '100%', borderRadius: '8px', boxShadow: '0 8px 16px rgba(16,185,129,0.3)' }}></div>
                <div style={{ width: '30px', background: 'rgba(255,255,255,0.4)', height: '60%', borderRadius: '8px' }}></div>
                <div style={{ width: '30px', background: 'rgba(255,255,255,0.4)', height: '90%', borderRadius: '8px' }}></div>
           </div>
           <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '24px' }}>
                <span>Mon</span><span>Tue</span><span style={{color: 'var(--text-primary)', fontWeight: 600}}>Wed</span><span>Fri</span><span>Sat</span><span>Sun</span>
           </div>

           <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500 }}><div style={{ width: 8, height: 8, borderRadius: '2px', background: '#10b981' }}></div>Income</div>
                   <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{formatCurrency(income)}</div>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500 }}><div style={{ width: 8, height: 8, borderRadius: '2px', background: '#0ea5e9' }}></div>Expenses</div>
                   <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{formatCurrency(expenses)}</div>
               </div>
           </div>
        </GlassCard>
    );    
};
