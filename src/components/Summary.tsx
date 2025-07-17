import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const Summary: React.FC = () => {
  const context = useContext(TransactionContext);

  if (!context) throw new Error('TransactionContext not found');

  const { transactions } = context;

  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expense;

  return (
    <div className="max-w-md mx-auto mt-4 bg-white p-4 rounded shadow text-center">
      <h2 className="text-xl font-bold mb-4">Summary</h2>

      <div className="flex justify-around">
        <div>
          <p className="text-green-600 font-semibold">Income</p>
          <p className="text-lg font-bold">${income}</p>
        </div>
        <div>
          <p className="text-red-600 font-semibold">Expense</p>
          <p className="text-lg font-bold">${expense}</p>
        </div>
        <div>
          <p className="text-gray-700 font-semibold">Balance</p>
          <p className="text-lg font-bold">${balance}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
