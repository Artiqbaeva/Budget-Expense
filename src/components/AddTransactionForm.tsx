import React, { useState, useContext, type FormEvent } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const AddTransactionForm: React.FC = () => {
  const context = useContext(TransactionContext);

  if (!context) throw new Error('TransactionContext not found');

  const { addTransaction } = context;

  const [type, setType] = useState<'income' | 'expense'>('income');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!category || !amount || !date) {
      alert('Please fill all required fields');
      return;
    }

    addTransaction({
      type,
      category,
      amount: parseFloat(amount),
      date,
      note,
    });

    setCategory('');
    setAmount('');
    setDate('');
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow w-full max-w-md mx-auto mt-4">
      <h2 className="text-xl font-bold mb-4">Add Transaction</h2>

      <div className="mb-2">
        <label className="mr-2">Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')} className="border rounded p-1">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="mb-2">
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded p-1 w-full"
          placeholder="e.g. Food, Salary"
        />
      </div>

      <div className="mb-2">
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded p-1 w-full"
          placeholder="e.g. 1000"
        />
      </div>

      <div className="mb-2">
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded p-1 w-full"
        />
      </div>

      <div className="mb-2">
        <label>Note:</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="border rounded p-1 w-full"
          placeholder="optional"
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700">
        Add
      </button>
    </form>
  );
};

export default AddTransactionForm;
