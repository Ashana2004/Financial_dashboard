import React from 'react';
import { GlassCard } from '../common/GlassCard';

// Stub components for the mini charts
const Sparkline = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', height: '60px', gap: '4px', marginTop: '24px' }}>
    <div style={{ flex: 1, background: '#10b981', height: '30%', width: '4px', borderRadius: '4px' }}></div>
    <div style={{ flex: 1, background: '#0ea5e9', height: '50%', width: '4px', borderRadius: '4px' }}></div>
    <div style={{ flex: 1, background: '#f43f5e', height: '80%', width: '4px', borderRadius: '4px' }}></div>
    <div style={{ flex: 1, background: '#10b981', height: '40%', width: '4px', borderRadius: '4px' }}></div>
    <div style={{ flex: 1, background: '#f43f5e', height: '60%', width: '4px', borderRadius: '4px' }}></div>
    <div style={{ flex: 1, background: '#0ea5e9', height: '100%', width: '4px', borderRadius: '4px' }}></div>
    <div style={{ flex: 1, background: '#10b981', height: '20%', width: '4px', borderRadius: '4px' }}></div>
  </div>
);

const MiniCard = ({ title, value, subtitle, children }) => (
  <GlassCard style={{ padding: '24px', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.8)' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1e293b' }}>{title}</span>
      <span style={{ color: 'var(--text-tertiary)' }}>⤢</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
      <span style={{ fontSize: '1.5rem', fontWeight: 600, color: '#1e293b' }}>{value}</span>
      {subtitle && <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{subtitle}</span>}
    </div>
    {children}
  </GlassCard>
);

export const AnalyticsSection = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* 4 Cards Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
        <MiniCard title="Spending Overview" value="$52,396.15" subtitle="$64,000.00">
          <Sparkline />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'var(--text-tertiary)', marginTop: '8px' }}>
            <span>Week</span><span>Month</span><span>Quarter</span><span>Year</span>
          </div>
        </MiniCard>
        
        <MiniCard title="Transaction Activity" value="123" subtitle="transactions">
          <Sparkline />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'var(--text-tertiary)', marginTop: '8px' }}>
            <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
          </div>
        </MiniCard>

        <MiniCard title="Category Breakdown" value="$2,800" subtitle="Saved">
          <Sparkline />
          <div style={{ display: 'flex', gap: '12px', fontSize: '0.65rem', color: 'var(--text-tertiary)', marginTop: '8px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }}></div>Marketing</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: 6, height: 6, borderRadius: '50%', background: '#f43f5e' }}></div>Office</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: 6, height: 6, borderRadius: '50%', background: '#0ea5e9' }}></div>HR</span>
          </div>
        </MiniCard>

        <MiniCard title="Spending Budget" value="$64,000.00" subtitle="In this month">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '16px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', color: '#10b981' }}>Marketing</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>$32,100</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', color: '#f43f5e' }}>Office</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>$12,800</span>
              </div>
            </div>
            <div style={{ width: '4px', height: '60px', background: 'rgba(0,0,0,0.05)', borderRadius: '4px', position: 'relative' }}>
              <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%', background: '#f43f5e', borderRadius: '4px' }}></div>
            </div>
          </div>
        </MiniCard>
      </div>

      {/* Bottom 2 Cards Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <MiniCard title="Pending Transactions" value="5" subtitle="/ 24 transactions">
          <Sparkline />
        </MiniCard>

        <GlassCard style={{ padding: '24px', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.8)', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1e293b' }}>Top Spending Team</span>
            <span style={{ color: 'var(--text-tertiary)' }}>⤢</span>
          </div>
          
          <div style={{ background: 'rgba(0,0,0,0.03)', borderRadius: '24px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
               <span style={{ fontSize: '0.7rem', padding: '4px 12px', background: 'white', borderRadius: '12px', fontWeight: 500 }}>Top spend today?</span>
               <span style={{ fontSize: '0.7rem', padding: '4px 12px', background: 'white', borderRadius: '12px', fontWeight: 500 }}>Transactions this week?</span>
            </div>
            <div style={{ position: 'relative' }}>
              <input type="text" placeholder="Ask anything or search" style={{ width: '100%', padding: '12px 16px 12px 40px', borderRadius: '20px', border: 'none', background: 'rgba(0,0,0,0.05)', outline: 'none', fontSize: '0.875rem' }} />
              <span style={{ position: 'absolute', left: 16, top: 12, opacity: 0.5 }}>✨</span>
            </div>
          </div>
        </GlassCard>
      </div>

    </div>
  );
};
