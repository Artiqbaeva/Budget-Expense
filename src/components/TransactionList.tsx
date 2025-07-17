import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import TransactionItem from './TransactionItem';

const TransactionList: React.FC = () => {
  const context = useContext(TransactionContext);

  if (!context) throw new Error('TransactionContext not found');

  const { transactions } = context;

  return (
    <div className="max-w-md mx-auto mt-4 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>

      {transactions.length === 0 ? (
        <p className="text-gray-500">No transactions yet.</p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
