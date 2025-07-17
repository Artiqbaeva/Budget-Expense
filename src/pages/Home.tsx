import React from 'react';
import AddTransactionForm from '../components/AddTransactionForm';
import Summary from '../components/Summary';
import TransactionList from '../components/TransactionList';
import Charts from '../components/Charts';
import GoalSavings from '../components/GoalSavings';
import FilterSearch from '../components/FilterSearch';
// import VoiceInput from '../components/VoiceInput';
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
        FinanceTracker
      </header>

      <Summary />
      <AddTransactionForm />
      <FilterSearch />
      <TransactionList />
      <Charts />
      <GoalSavings />
      {/* <VoiceInput/> */}
    </div>
  );
};

export default Home;
