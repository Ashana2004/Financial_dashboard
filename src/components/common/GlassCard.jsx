import React from 'react';

export const GlassCard = ({ children, className = '', variant = 'base', ...props }) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'strong': return 'glass-card-strong';
      case 'dark': return 'glass-card-dark';
      default: return 'glass-card';
    }
  };

  return (
    <div className={`${getVariantClass()} ${className}`} {...props}>
      {children}
    </div>
  );
};
