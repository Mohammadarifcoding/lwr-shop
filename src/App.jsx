import React, { useContext, useReducer } from 'react';
import TopBar from './shared/TopBar/TopBar';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Filter from './components/filter/Filter';
import ProductSection from './components/ProductSection/ProductSection';
import Cart from './components/cart/Cart';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';
import { CartContext } from './context/cartContext';
import { cartReducer, initialState } from './reducers/ProductsReducer';

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <TopBar />
      <Navbar />
      <Main>
        <ProductSection />
        <Cart />
      </Main>
      <Newsletter />
      <Footer />
    </CartContext.Provider>
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
