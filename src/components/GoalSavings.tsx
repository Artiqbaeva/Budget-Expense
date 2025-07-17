import React, { useState } from 'react';

const GoalSavings: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [target, setTarget] = useState('');
  const [saved, setSaved] = useState(0);

  const handleAddSaving = () => {
    if (!target) return alert('Set target first');
    const amount = prompt('Enter amount to save');
    if (amount) {
      setSaved(saved + parseFloat(amount));
    }
  };

  const progress = target ? Math.min((saved / parseFloat(target)) * 100, 100) : 0;

  return (
    <div className="max-w-md mx-auto mt-4 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Goal Savings</h2>

      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Goal name (e.g. Macbook)"
        className="border rounded p-1 w-full mb-2"
      />

      <input
        type="number"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        placeholder="Target amount"
        className="border rounded p-1 w-full mb-2"
      />

      <div className="bg-gray-200 rounded-full h-4 mb-2">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-center">{saved} / {target}</p>

      <button
        onClick={handleAddSaving}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700 w-full"
      >
        Add Saving
      </button>
    </div>
  );
};

export default GoalSavings;
