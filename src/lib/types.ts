export type TransactionCategory =
  | 'bills'
  | 'debt'
  | 'education'
  | 'entertainment'
  | 'food'
  | 'health'
  | 'savings'
  | 'shopping'
  | 'transportation'
  | 'other';

export type TransactionType = 'income' | 'expense';

export type Transaction = {
  id: string;
  name: string;
  category: TransactionCategory;
  type: TransactionType;
  amount: number;
  date: Date;
};
