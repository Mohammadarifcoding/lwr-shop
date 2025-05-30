import React from 'react';
import Filter from '../filter/Filter';
import Products from '../Products/Products';

const ProductSection = () => {
  return (
    <div className="lg:col-span-2">
      <Filter />

      <Products />
    </div>
  );
};

export default ProductSection;
