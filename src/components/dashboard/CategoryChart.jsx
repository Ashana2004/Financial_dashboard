import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useTransactions } from '../../contexts/TransactionContext';

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f97316', '#06b6d4', '#10b981', '#f59e0b', '#6366f1'];

export const CategoryChart = ({ data }) => {
  const { setFilterCategory } = useTransactions();

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          background: 'var(--glass-bg-strong)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--border-glass)',
          borderRadius: '12px',
          padding: '8px 12px',
          color: 'var(--text-primary)',
          fontSize: '0.875rem',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
        }}>
          <p style={{ fontWeight: 500, margin: 0 }}>{payload[0].name}</p>
          <p style={{ margin: 0, color: 'var(--text-secondary)' }}>${payload[0].value.toFixed(2)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ height: '240px', width: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            onClick={(data) => setFilterCategory(data.name)}
            cursor="pointer"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]} 
                stroke="var(--glass-bg-strong)"
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
