import React, { useMemo } from 'react';
import { StatCard } from './StatCard';
import { GlassCard } from '../common/GlassCard';
import { useTransactions } from '../../contexts/TransactionContext';
import { calculateBalance, calculateTotalIncome, calculateTotalExpenses } from '../../utils/calculations';
import { formatCurrency } from '../../utils/formatting';
import { ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';

const SummaryMetric = ({ title, amount, icon: Icon, type }) => (
  <GlassCard style={{ padding: '24px', flex: '1 1 min(200px, 100%)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '12px',
        background: type === 'income' ? 'rgba(16, 185, 129, 0.1)' : type === 'expense' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: type === 'income' ? '#34d399' : type === 'expense' ? '#f87171' : '#60a5fa'
      }}>
        <Icon size={20} />
      </div>
      <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500 }}>{title}</span>
    </div>
    <div style={{ fontSize: '1.75rem', fontWeight: 600 }} className="tabular-nums">
      {amount}
    </div>
  </GlassCard>
);

export const SummarySection = () => {
  const { transactions } = useTransactions();

  const balance = useMemo(() => formatCurrency(calculateBalance(transactions)), [transactions]);
  const income = useMemo(() => formatCurrency(calculateTotalIncome(transactions)), [transactions]);
  const expenses = useMemo(() => formatCurrency(calculateTotalExpenses(transactions)), [transactions]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
      <StatCard balance={balance} />
      
      <div style={{ display: 'flex', flex: '1 1 min(500px, 100%)', flexWrap: 'wrap', gap: '24px' }}>
        <SummaryMetric title="Total Income" amount={income} icon={ArrowDownRight} type="income" />
        <SummaryMetric title="Total Expenses" amount={expenses} icon={ArrowUpRight} type="expense" />
        <SummaryMetric title="Net Saving" amount={formatCurrency(calculateTotalIncome(transactions) - calculateTotalExpenses(transactions))} icon={Activity} type="neutral" />
      </div>
    </div>
  );
};
