import React from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { formatShortDate } from '../../utils/formatting';

export const BalanceTrendChart = ({ data }) => {
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
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.75rem', marginBottom: '4px' }}>
            {formatShortDate(payload[0].payload.date)}
          </p>
          <p style={{ fontWeight: 600, margin: 0 }}>${payload[0].value.toFixed(2)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ height: '240px', width: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-glass)" vertical={false} />
          <XAxis 
            dataKey="date" 
            tickFormatter={(val) => formatShortDate(val)}
            stroke="var(--text-tertiary)"
            tick={{ fill: 'var(--text-secondary)', fontSize: 10 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="var(--text-tertiary)"
            tick={{ fill: 'var(--text-secondary)', fontSize: 10 }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(val) => `$${val/1000}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="balance" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6, fill: '#3b82f6', stroke: 'var(--glass-bg-strong)', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
