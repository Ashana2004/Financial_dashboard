import React from 'react';
import { Header } from './Header';

export const AppLayout = ({ children }) => {
  return (
    <div className="gradient-background">
      <Header />
      <main style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        {children}
      </main>
    </div>
  );
};

// Add a quick flex utility since we aren't using tailwind
const style = document.createElement('style');
style.textContent = `
  @media (min-width: 768px) {
    .md-flex { display: flex !important; }
  }
`;
document.head.appendChild(style);
