import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export const Dropdown = ({ options, value, onChange, placeholder = 'Select an option', className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className={`relative ${className}`} ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        type="button"
        className="glass-input"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={{ color: selectedOption ? 'inherit' : 'var(--text-tertiary)' }}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '8px',
          background: 'var(--glass-bg-strong)',
          backdropFilter: 'blur(30px)',
          border: '1px solid var(--border-glass)',
          borderRadius: '12px',
          overflow: 'hidden',
          zIndex: 10
        }}>
          {options.map((option) => (
            <div
              key={option.value}
              style={{
                padding: '10px 16px',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={e => e.target.style.background = 'transparent'}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
