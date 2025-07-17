// import React, { useState, useContext } from 'react';
// import { TransactionContext } from '../context/TransactionContext';

// const VoiceInput: React.FC = () => {
//   const [text, setText] = useState('');
//   const context = useContext(TransactionContext);
//   if (!context) throw new Error('TransactionContext not found');

//   const { addTransaction } = context;

//   const handleVoice = () => {
//     const recognition = new (window as any).webkitSpeechRecognition();
//     recognition.lang = 'en-US';
//     recognition.start();


//     recognition.onresult = (event: any) => {
//       const result = event.results[0][0].transcript;
//       setText(result);
//       parseAndAdd(result);
//     };
//   };

//   const parseAndAdd = (input: string) => {
//     const isExpense = input.toLowerCase().includes('buy');
//     const amountMatch = input.match(/\d+/);
//     const amount = amountMatch ? parseFloat(amountMatch[0]) : 0;
//     const words = input.split(' ');
//     const category = words.find((w) => w.toLowerCase() !== 'buy' && isNaN(parseFloat(w))) || 'Misc';

//     addTransaction({
//       type: isExpense ? 'expense' : 'income',
//       category,
//       amount,
//       date: new Date().toISOString().split('T')[0],
//       note: input,
//     });
//   };

//   return (
//     <div className="max-w-md mx-auto mt-4 bg-white p-4 rounded shadow">
//       <h2 className="text-xl font-bold mb-4">Voice Input</h2>
//       <button
//         onClick={handleVoice}
//         className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
//       >
//         Speak
//       </button>
//       <p className="mt-2 text-gray-600">{text}</p>
//     </div>
//   );
// };

// export default VoiceInput;
