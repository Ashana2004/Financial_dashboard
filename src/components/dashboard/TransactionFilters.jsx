import React from 'react';
import { Input } from '../common/Input';
import { Search } from 'lucide-react';
import { useTransactions } from '../../contexts/TransactionContext';

export const TransactionFilters = () => {
  const { searchQuery, setSearchQuery, filterCategory, setFilterCategory } = useTransactions();

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '24px', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ position: 'relative', flex: '1 1 300px', maxWidth: '400px' }}>
        <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
        <Input 
          placeholder="Search transactions..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ paddingLeft: '44px' }}
        />
      </div>
      
      {filterCategory && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Filtered by:</span>
          <span className="glass-badge" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px' }}>
            {filterCategory}
            <button 
              onClick={() => setFilterCategory(null)}
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
            >
              ×
            </button>
          </span>
        </div>
      )}
    </div>
  );
};
