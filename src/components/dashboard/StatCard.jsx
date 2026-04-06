import React from 'react';
import { GlassCard } from '../common/GlassCard';
import { DollarSign, Plus, ArrowRightLeft } from 'lucide-react';

export const StatCard = ({ balance }) => {
  return (
    <GlassCard variant="strong" style={{ 
      padding: '24px', 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between',
      background: 'rgba(255, 255, 255, 0.65)',
      borderRadius: '32px'
    }}>
      <div style={{ paddingBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
            Account Value <span style={{ marginLeft: '12px', fontSize: '0.75rem', opacity: 0.6 }}>ID: 8674</span>
          </div>
        </div>
        <div style={{ fontSize: '2.5rem', fontWeight: 500, color: '#1e293b', marginBottom: '8px', letterSpacing: '-1px' }}>
          {balance}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
          Active
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <button style={{ width: '48px', height: '48px', borderRadius: '50%', border: 'none', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e293b', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
            <DollarSign size={20} />
          </button>
          <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Pay</span>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <button style={{ width: '48px', height: '48px', borderRadius: '50%', border: 'none', background: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 4px 12px rgba(14,165,233,0.3)', cursor: 'pointer' }}>
            <Plus size={20} />
          </button>
          <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Add money</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <button style={{ width: '48px', height: '48px', borderRadius: '50%', border: 'none', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e293b', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
            <ArrowRightLeft size={20} />
          </button>
          <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Transfer</span>
        </div>
      </div>
    </GlassCard>
  );
};
