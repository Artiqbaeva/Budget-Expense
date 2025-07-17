import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a855f7', '#f43f5e'];

const Charts: React.FC = () => {
  const context = useContext(TransactionContext);

  if (!context) throw new Error('TransactionContext not found');

  const { transactions } = context;

  const expenseData = transactions
    .filter((t) => t.type === 'expense')
    .reduce<{ [key: string]: number }>((acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
      return acc;
    }, {});

  const expenseChartData = Object.entries(expenseData).map(([key, value]) => ({
    name: key,
    value,
  }));

  const incomeTotal = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenseTotal = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const barChartData = [
    { name: 'Income', amount: incomeTotal },
    { name: 'Expense', amount: expenseTotal },
  ];

  return (
    <div className="max-w-md mx-auto mt-4 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Charts</h2>

      <div className="h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={expenseChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {expenseChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="h-64 mt-8">
        <ResponsiveContainer>
          <BarChart data={barChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#60a5fa" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
