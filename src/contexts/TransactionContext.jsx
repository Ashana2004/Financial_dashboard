import React, { createContext, useContext, useState, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { mockTransactions } from '../data/mockData';

const TransactionContext = createContext();

export const useTransactions = () => useContext(TransactionContext);

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useLocalStorage('finance_transactions', mockTransactions);
  const [filterCategory, setFilterCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const addTransaction = (transaction) => {
    setTransactions(prev => [{
      ...transaction,
      id: `tx_${Math.random().toString(36).substr(2, 9)}`,
      date: new Date().toISOString()
    }, ...prev]);
  };

  const editTransaction = (id, updatedData) => {
    setTransactions(prev => prev.map(t => t.id === id ? { ...t, ...updatedData } : t));
  };

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      const matchesCategory = filterCategory ? t.category === filterCategory : true;
      const matchesSearch = searchQuery 
        ? t.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
          t.category.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return matchesCategory && matchesSearch;
    });
  }, [transactions, filterCategory, searchQuery]);

  return (
    <TransactionContext.Provider value={{
      transactions,
      filteredTransactions,
      addTransaction,
      editTransaction,
      deleteTransaction,
      filterCategory,
      setFilterCategory,
      searchQuery,
      setSearchQuery
    }}>
      {children}
    </TransactionContext.Provider>
  );
};
