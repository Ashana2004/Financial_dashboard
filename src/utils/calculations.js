export const calculateBalance = (transactions) => {
  return transactions.reduce((acc, curr) => {
    if (curr.type === 'income') return acc + curr.amount;
    return acc - curr.amount;
  }, 0);
};

export const calculateTotalIncome = (transactions) => {
  return transactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);
};

export const calculateTotalExpenses = (transactions) => {
  return transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);
};

export const groupByCategory = (transactions) => {
  const expenseTransactions = transactions.filter(t => t.type === 'expense');
  const grouped = expenseTransactions.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  return Object.keys(grouped).map(key => ({
    name: key,
    value: grouped[key]
  })).sort((a, b) => b.value - a.value);
};

export const getDailyBalance = (transactions, days = 30) => {
  const sorted = [...transactions].sort((a, b) => new Date(a.date) - new Date(b.date));
  let currentBalance = 0;
  return sorted.map(t => {
    currentBalance += t.type === 'income' ? t.amount : -t.amount;
    return {
      date: t.date,
      balance: currentBalance
    };
  });
};
