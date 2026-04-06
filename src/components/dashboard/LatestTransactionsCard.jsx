import React, { useState } from 'react';
import { GlassCard } from '../common/GlassCard';
import { useTransactions } from '../../contexts/TransactionContext';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../common/Button';
import { Plus } from 'lucide-react';
import { TransactionModal } from './TransactionModal';

export const LatestTransactionsCard = () => {
   const { transactions, addTransaction } = useTransactions();
   const { isAdmin } = useAuth();
   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleSubmit = (data) => {
     addTransaction(data);
   };

   return (
      <GlassCard style={{ padding: '24px', background: 'var(--glass-bg)', backdropFilter: 'blur(28px)', borderRadius: '24px' }}>
        <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '16px' }}>Latest Transactions</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {transactions.slice(0, 3).map((t, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.8)', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>
                  {t.description.charAt(0)}
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{t.description}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <div style={{ display: 'flex' }}>
                    <div style={{ width: 8, height: 12, borderRadius: '4px', background: t.type === 'income' ? '#0ea5e9' : '#f59e0b', zIndex: 2 }}></div>
                    <div style={{ width: 8, height: 12, borderRadius: '4px', background: t.type === 'income' ? '#8b5cf6' : '#ef4444', marginLeft: '-4px', zIndex: 1 }}></div>
                 </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: t.type === 'income' ? '#10b981' : '#10b981' }}>{t.type === 'income' ? '+' : '+'}₹{Math.abs(t.amount).toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>

        {isAdmin && (
          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
            <Button variant="primary" style={{ width: '100%' }} icon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
              Add Record
            </Button>
          </div>
        )}

        <TransactionModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
        />
      </GlassCard>
   );
};
