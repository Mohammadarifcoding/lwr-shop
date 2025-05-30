import React, { useContext } from 'react';
import { ProductData } from '../../data/ProductData';
import ProductCard from './ProductCard';
import { CartContext } from '../../context/cartContext';

const Products = () => {
  const {state} = useContext(CartContext)
const products = state.products
  return (
    <div className="product-grid">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
