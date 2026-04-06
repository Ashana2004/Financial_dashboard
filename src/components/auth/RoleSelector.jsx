import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Shield } from 'lucide-react';

export const RoleSelector = () => {
  const { role, setRole } = useAuth();

  return (
    <button
      onClick={() => setRole(role === 'admin' ? 'viewer' : 'admin')}
      style={{
        background: 'transparent',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        color: 'var(--text-primary)',
        fontSize: '0.875rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}
      title={`Current role: ${role}. Click to switch.`}
    >
      <Shield size={16} color={role === 'admin' ? 'var(--accent-blue)' : 'var(--text-tertiary)'} />
      {role === 'admin' ? 'Admin' : 'Viewer'}
    </button>
  );
};
