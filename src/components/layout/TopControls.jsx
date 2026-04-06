import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { RoleSelector } from '../auth/RoleSelector';
import { Settings, User } from 'lucide-react';

export const TopControls = ({ setCurrentView }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
      <div>
        <h1 style={{ fontSize: '2rem', fontWeight: 600, color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.1)', marginBottom: '4px' }}>Good Morning, Intern 👋</h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem' }}>Here is your overview panel.</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.6)', padding: '8px 16px', borderRadius: '24px', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.5)', boxShadow: '0 8px 32px rgba(0,0,0,0.05)' }}>
        <RoleSelector />
        <div style={{ width: '1px', height: '20px', background: 'rgba(0,0,0,0.1)' }}></div>
        <ThemeToggle />
        <div style={{ width: '1px', height: '20px', background: 'rgba(0,0,0,0.1)' }}></div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => setCurrentView && setCurrentView('profile')}>
          <Settings size={18} color="var(--text-secondary)" />
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, border: '2px solid white' }}>
            <User size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
