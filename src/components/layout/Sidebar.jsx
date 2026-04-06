import React from 'react';
import { Home, PieChart, TrendingUp, Cpu } from 'lucide-react';

export const Sidebar = ({ currentView, setCurrentView }) => {
  const navItemStyle = (id) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    background: currentView === id ? 'rgba(255,255,255,0.8)' : 'transparent',
    color: currentView === id ? '#0f172a' : 'var(--text-secondary)',
    fontWeight: currentView === id ? 600 : 500,
    boxShadow: currentView === id ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
  });

  return (
    <div className="app-sidebar" style={{
      padding: '32px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      background: 'rgba(255,255,255,0.4)',
      backdropFilter: 'blur(40px)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a' }}>
        <div style={{ background: '#0ea5e9', borderRadius: '6px', width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>P</div>
        <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>Payrix</span>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={navItemStyle('spendings')} onClick={() => setCurrentView('spendings')}>
          <Home size={18} /> Spendings
        </div>
        <div style={navItemStyle('investments')} onClick={() => setCurrentView('investments')}>
          <PieChart size={18} /> Investments
        </div>
        <div style={navItemStyle('growth')} onClick={() => setCurrentView('growth')}>
          <TrendingUp size={18} /> Growth
        </div>
        <div style={navItemStyle('insights')} onClick={() => setCurrentView('insights')}>
          <Cpu size={18} /> AI Insights
        </div>
      </nav>
    </div>
  );
};
