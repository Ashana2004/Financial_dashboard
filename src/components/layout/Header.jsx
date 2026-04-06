import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { RoleSelector } from '../auth/RoleSelector';

export const Header = () => {
  return (
    <header style={{
      height: '72px',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--glass-bg)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      borderBottom: '1px solid var(--border-glass)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ 
          width: '32px', 
          height: '32px', 
          background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          color: 'white'
        }}>
          P
        </div>
        <span style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.5px' }}>Payrix</span>
      </div>

      <div style={{ display: 'none', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '12px', border: '1px solid var(--border-glass)' }} className="md-flex">
        {['Day', 'Week', 'Month'].map(period => (
          <button key={period} style={{
            padding: '6px 16px',
            borderRadius: '8px',
            background: period === 'Month' ? 'rgba(255,255,255,0.1)' : 'transparent',
            color: period === 'Month' ? 'white' : 'var(--text-secondary)',
            border: 'none',
            fontSize: '0.875rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>
            {period}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <RoleSelector />
        <ThemeToggle />
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="glass-button-icon"><Bell size={18} /></button>
          <button className="glass-button-icon"><Settings size={18} /></button>
        </div>
        <div style={{ 
          width: '36px', 
          height: '36px', 
          borderRadius: '50%', 
          background: 'var(--glass-bg-strong)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid var(--border-glass)'
        }}>
          <User size={18} />
        </div>
      </div>
    </header>
  );
};
