import React from 'react';
import { GlassCard } from '../common/GlassCard';
import { Maximize2 } from 'lucide-react';

export const ChartCard = ({ title, value, children }) => {
  return (
    <GlassCard style={{ padding: '24px', flex: '1 1 min(300px, 100%)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '4px' }}>
            {title}
          </h3>
          {value && (
            <div style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {value}
            </div>
          )}
        </div>
        <button className="glass-button-icon" style={{ opacity: 0.5, padding: '4px' }}>
          <Maximize2 size={16} />
        </button>
      </div>
      {children}
    </GlassCard>
  );
};
