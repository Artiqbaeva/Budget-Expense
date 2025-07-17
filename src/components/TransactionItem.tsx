import React, { useContext } from 'react';
import { TransactionContext, type Transaction } from '../context/TransactionContext';

interface Props {
  transaction: Transaction;
}

const TransactionItem: React.FC<Props> = ({ transaction }) => {
  const context = useContext(TransactionContext);

  if (!context) throw new Error('TransactionContext not found');

  const { deleteTransaction } = context;

  return (
    <li className="flex justify-between items-center border-b py-2">
      <div>
        <p className="font-semibold">{transaction.category}</p>
        <p className="text-sm text-gray-500">{transaction.date}</p>
        {transaction.note && <p className="text-xs text-gray-400">{transaction.note}</p>}
      </div>

      <div className="flex items-center gap-2">
        <span className={`font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
          {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
