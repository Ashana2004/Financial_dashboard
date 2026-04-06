import React from 'react';
import { formatCurrency, formatDate } from '../../utils/formatting';
import { Edit2, Trash2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export const TransactionRow = ({ transaction, onEdit, onDelete }) => {
  const { isAdmin } = useAuth();
  const isIncome = transaction.type === 'income';

  return (
    <tr>
      <td style={{ color: 'var(--text-tertiary)' }}>{formatDate(transaction.date)}</td>
      <td>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'var(--glass-bg-strong)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.875rem',
            fontWeight: 600,
            border: '1px solid var(--border-glass)'
          }}>
            {transaction.description.charAt(0).toUpperCase()}
          </div>
          <span style={{ fontWeight: 500 }}>{transaction.description}</span>
        </div>
      </td>
      <td>
        <span className="glass-badge" style={{ 
          background: 'rgba(255,255,255,0.05)', 
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'var(--text-secondary)'
        }}>
          {transaction.category}
        </span>
      </td>
      <td style={{ textAlign: 'right', fontWeight: 600, color: isIncome ? 'var(--success-glass)' : 'var(--text-primary)' }} className="tabular-nums">
        {isIncome ? '+' : '-'}{formatCurrency(transaction.amount)}
      </td>
      {isAdmin && (
        <td style={{ textAlign: 'right' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <button className="glass-button-icon" onClick={() => onEdit(transaction)} title="Edit">
              <Edit2 size={16} />
            </button>
            <button className="glass-button-icon" onClick={() => onDelete(transaction.id)} title="Delete" style={{ color: 'var(--danger-glass)' }}>
              <Trash2 size={16} />
            </button>
          </div>
        </td>
      )}
    </tr>
  );
};
