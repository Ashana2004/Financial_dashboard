import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { Dropdown } from '../common/Dropdown';
import { CATEGORIES, TRANSACTION_TYPES } from '../../utils/constants';

export const TransactionModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    description: '',
    amount: '',
    type: 'expense',
    category: CATEGORIES.EXPENSE[0],
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      amount: parseFloat(formData.amount)
    });
    onClose();
  };

  const typeOptions = [
    { value: 'expense', label: 'Expense' },
    { value: 'income', label: 'Income' }
  ];

  const categoryOptions = formData.type === 'expense' 
    ? CATEGORIES.EXPENSE.map(c => ({ value: c, label: c }))
    : CATEGORIES.INCOME.map(c => ({ value: c, label: c }));

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={initialData ? 'Edit Transaction' : 'Add Transaction'}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '8px', color: 'var(--text-secondary)' }}>Type</label>
          <Dropdown 
            options={typeOptions}
            value={formData.type}
            onChange={(val) => setFormData(prev => ({ ...prev, type: val, category: val === 'expense' ? CATEGORIES.EXPENSE[0] : CATEGORIES.INCOME[0] }))}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '8px', color: 'var(--text-secondary)' }}>Description</label>
          <Input 
            required
            placeholder="e.g. Apple Inc" 
            value={formData.description}
            onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '8px', color: 'var(--text-secondary)' }}>Amount</label>
          <Input 
            required
            type="number"
            step="0.01"
            min="0"
            placeholder="0.00" 
            value={formData.amount}
            onChange={e => setFormData(prev => ({ ...prev, amount: e.target.value }))}
          />
        </div>

        <div>
           <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '8px', color: 'var(--text-secondary)' }}>Category</label>
           <Dropdown 
            options={categoryOptions}
            value={formData.category}
            onChange={(val) => setFormData(prev => ({ ...prev, category: val }))}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '8px' }}>
          <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="primary">Save</Button>
        </div>
      </form>
    </Modal>
  );
};
