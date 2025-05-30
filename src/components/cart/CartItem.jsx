import { useContext } from 'react';
import product1 from '/dist/assets/img/image 1.png';
import { CartContext } from '../../context/cartContext';
const CartItem = ({cart}) => {
  const totalPrice = (cart.quantity * cart.price).toFixed(2)
  const {dispatch} = useContext(CartContext);

  const deleteFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId: cart.productId } });
  }

  return (
    <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
        <img src={cart.image} alt={cart.name} className="h-full w-auto object-cover" />
      </div>
    
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium">{cart.name}</h3>
          <span onClick={deleteFromCart} className="text-red-500 text-sm">×</span>
        </div>
        <p className="text-sm text-gray-500">Size: {cart.size}</p>
        <p className="text-sm text-gray-500">Color: {cart.color}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold">${totalPrice}</p>
          <div className="flex items-center space-x-2">
            <button  className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
              −
            </button>
            <span className="text-sm">{cart.quantity}</span>
            <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
