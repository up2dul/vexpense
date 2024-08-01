import { computed, onMounted, ref } from 'vue';

import type { Transaction } from '@/lib/types';

const transactions = ref<Transaction[]>([]);

export function useBalance() {
  onMounted(() => {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      transactions.value = JSON.parse(storedTransactions);
    }
  });

  const total = computed(() => {
    const totalIncome = transactions.value
      .filter((t) => t.type === 'income')
      .reduce((acc, t) => acc + t.amount, 0);
    const totalExpenses = transactions.value
      .filter((t) => t.type === 'expense')
      .reduce((acc, t) => acc + t.amount, 0);

    return (totalIncome - totalExpenses).toFixed(2);
  });

  const income = computed(() => {
    return transactions.value
      .filter((t) => t.type === 'income')
      .reduce((acc, t) => acc + t.amount, 0)
      .toFixed(2);
  });

  const expenses = computed(() => {
    return transactions.value
      .filter((t) => t.type === 'expense')
      .reduce((acc, t) => acc + t.amount, 0)
      .toFixed(2);
  });

  const addTransaction = (transaction: Transaction) => {
    transactions.value.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions.value));
  };

  return {
    total,
    income,
    expenses,
    transactions,
    addTransaction,
  };
}
