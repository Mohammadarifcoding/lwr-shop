import React from 'react';
import { ProductData } from '../../data/ProductData';
import ProductCard from './ProductCard';

const Products = () => {
  return   <div className="product-grid">
    {ProductData.map((product)=> <ProductCard key={product.id} product={product}/>)}
  </div>;
};

export default Products;
