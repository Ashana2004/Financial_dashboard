import React from 'react';

export const EmptyState = ({ icon: Icon, message, description }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      textAlign: 'center',
      color: 'var(--text-secondary)'
    }}>
      {Icon && <Icon size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />}
      <h3 style={{ fontSize: '1.125rem', marginBottom: '8px', color: 'var(--text-primary)' }}>{message}</h3>
      {description && <p style={{ fontSize: '0.875rem' }}>{description}</p>}
    </div>
  );
};
