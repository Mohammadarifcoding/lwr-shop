import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { randomId } from '../../utils/getId';

const ProductCard = ({ product }) => {
  const { state, dispatch } = useContext(CartContext);
  console.log(state);
  const discountedPrice = product.discountAvailable
    ? (product.price - (product.price * product.discountAmount) / 100).toFixed(2)
    : product.price.toFixed(2);
  const addToCart = () => {
    const payload = {
      quantity: 1,
      productId: product.id,
      id: randomId(),
      name: product.name,
      image: product.image,
      price: discountedPrice,
      rating: product.rating,
      size: product.size,
      color: product.color,
    };
    dispatch({ type: 'ADD_TO_CART', payload: payload });
  };

  const removeFromCart = () => {
    const payload = { productId: product.id };
    dispatch({ type: 'REMOVE_FROM_CART', payload: payload });
  };
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="h-full w-auto object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.name} </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <div className="flex text-yellow-400">
              {Array.from({ length: product.rating }, (_, index) => (
                <span key={index}>★</span>
              ))}
              {Array.from({ length: 5 - product.rating }, (_, index) => (
                <span className="text-gray-300" key={index}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">{product.rating}/5</span>
          </div>
          <span className="text-xs text-gray-700">({product.stock} pcs left)</span>
        </div>
        {product.discountAvailable ? (
          <div className="flex items-center">
            <p className="font-bold">${discountedPrice}</p>
            <p className="text-gray-400 line-through ml-2">${product.price}</p>
          </div>
        ) : (
          <p className="font-bold">${product.price} </p>
        )}
        {product?.isInCart ? (
          <button
            onClick={removeFromCart}
            className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
