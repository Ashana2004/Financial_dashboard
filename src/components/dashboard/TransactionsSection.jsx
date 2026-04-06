import React, { useState } from 'react';
import { GlassCard } from '../common/GlassCard';
import { Button } from '../common/Button';
import { Plus } from 'lucide-react';
import { TransactionTable } from './TransactionTable';
import { TransactionFilters } from './TransactionFilters';
import { TransactionModal } from './TransactionModal';
import { useTransactions } from '../../contexts/TransactionContext';
import { useAuth } from '../../contexts/AuthContext';

export const TransactionsSection = () => {
  const { filteredTransactions, addTransaction, editTransaction, deleteTransaction } = useTransactions();
  const { isAdmin } = useAuth();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingData, setEditingData] = useState(null);

  const handleOpenEdit = (transaction) => {
    setEditingData(transaction);
    setIsModalOpen(true);
  };

  const handleOpenAdd = () => {
    setEditingData(null);
    setIsModalOpen(true);
  };

  const handleSubmit = (data) => {
    if (editingData) {
      editTransaction(editingData.id, data);
    } else {
      addTransaction(data);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      deleteTransaction(id);
    }
  };

  return (
    <GlassCard style={{ padding: '24px', background: 'var(--glass-bg)', backdropFilter: 'blur(28px)', borderRadius: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>All Transactions</h2>
        {isAdmin && (
          <Button variant="primary" icon={<Plus size={16} />} onClick={handleOpenAdd}>
            Add Record
          </Button>
        )}
      </div>
      
      <TransactionFilters />
      
      <TransactionTable 
        transactions={filteredTransactions} 
        onEdit={handleOpenEdit}
        onDelete={handleDelete}
      />

      <TransactionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={editingData}
      />
    </GlassCard>
  );
};
