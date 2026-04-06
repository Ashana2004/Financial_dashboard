export const generateMockData = () => {
  const data = [];
  const baseDate = new Date();
  baseDate.setDate(baseDate.getDate() - 90); // Last 90 days

  const userCompanies = ['Apple Inc', 'Figma Inc', 'Paypal', 'Whole Foods', 'Uber', 'Netflix', 'Amazon', 'Spotify', 'AT&T', 'Chevron'];
  const incomeCompanies = ['Acme Corp Inc (Salary)', 'Upwork (Freelance)', 'Dividend Payout'];

  for (let i = 0; i < 50; i++) {
    const isExpense = Math.random() > 0.3; // 70% expense
    const amount = isExpense 
      ? Math.floor(Math.random() * 200) + 15 
      : Math.floor(Math.random() * 4000) + 500;
    
    let description, category;
    if (isExpense) {
      description = userCompanies[Math.floor(Math.random() * userCompanies.length)];
      category = ['Groceries', 'Dining', 'Transport', 'Utilities', 'Entertainment', 'Shopping', 'Other'][Math.floor(Math.random() * 7)];
    } else {
      description = incomeCompanies[Math.floor(Math.random() * incomeCompanies.length)];
      category = 'Salary';
    }

    const txDate = new Date(baseDate);
    txDate.setDate(baseDate.getDate() + (i * 1.8));

    data.push({
      id: `tx_${Math.random().toString(36).substr(2, 9)}`,
      date: txDate.toISOString(),
      description,
      amount,
      category,
      type: isExpense ? 'expense' : 'income',
      paymentMethod: 'Debit Card'
    });
  }
  return data.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const mockTransactions = generateMockData();
