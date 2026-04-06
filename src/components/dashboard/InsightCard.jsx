import React from 'react';
import { GlassCard } from '../common/GlassCard';

export const InsightCard = ({ icon: Icon, title, description, highlight }) => {
  return (
    <GlassCard style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{
        minWidth: '40px',
        height: '40px',
        borderRadius: '10px',
        background: 'var(--glass-bg-strong)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: highlight ? 'var(--text-primary)' : 'var(--text-secondary)'
      }}>
        <Icon size={20} />
      </div>
      <div>
        <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '6px' }}>{title}</h4>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
          {description}
        </p>
      </div>
    </GlassCard>
  );
};
