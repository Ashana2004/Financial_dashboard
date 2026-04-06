import React from 'react';
import { TransactionRow } from './TransactionRow';
import { useAuth } from '../../contexts/AuthContext';
import { EmptyState } from '../common/EmptyState';
import { Receipt } from 'lucide-react';

export const TransactionTable = ({ transactions, onEdit, onDelete }) => {
  const { isAdmin } = useAuth();

  if (!transactions.length) {
    return <EmptyState icon={Receipt} message="No transactions found" description="Try adjusting your filters or search." />;
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="glass-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th style={{ textAlign: 'right' }}>Amount</th>
            {isAdmin && <th style={{ textAlign: 'right' }}>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {transactions.map(t => (
            <TransactionRow 
              key={t.id} 
              transaction={t} 
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
