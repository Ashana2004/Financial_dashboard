import React from 'react';

export const Button = ({ 
  children, 
  variant = 'secondary', 
  icon, 
  className = '', 
  ...props 
}) => {
  const baseClass = variant === 'primary' ? 'glass-button-primary' : 'glass-button';
  
  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
};

export const IconButton = ({ icon, className = '', ...props }) => {
  return (
    <button className={`glass-button-icon ${className}`} {...props}>
      {icon}
    </button>
  );
};
