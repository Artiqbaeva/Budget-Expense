import React, { useContext, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const FilterSearch: React.FC = () => {
  const context = useContext(TransactionContext);

  if (!context) throw new Error('TransactionContext not found');

  const { transactions } = context;

  const [typeFilter, setTypeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [search, setSearch] = useState('');

  const filtered = transactions.filter(t => {
    return (
      (typeFilter === '' || t.type === typeFilter) &&
      (categoryFilter === '' || t.category === categoryFilter) &&
      (search === '' || t.note?.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="max-w-md mx-auto mt-4 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Filter & Search</h2>

      <div className="flex gap-2 mb-2">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border rounded p-1 flex-1"
        >
          <option value="">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          type="text"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          placeholder="Category"
          className="border rounded p-1 flex-1"
        />
      </div>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search note"
        className="border rounded p-1 w-full mb-2"
      />

      <p>{filtered.length} results found</p>
    </div>
  );
};

export default FilterSearch;
