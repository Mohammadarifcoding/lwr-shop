import React from 'react';
import TopBar from './shared/TopBar/TopBar';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="">
      <TopBar />
      <Navbar/>
    </div>
  );
};

export default App;

// /** @type {import('tailwindcss').Config} */

// export default {
// 	darkMode: 'class',
// 	theme: {
// 		extend: {
//           fontFamily: {
//             satoshi: ['Satoshi', 'sans-serif'],
//           },
//         colors: {
//         primary: '#4f46e5',
//         secondary: '#14b8a6',
//       },
//         }
// 	},
// 	plugins: [],
// };
