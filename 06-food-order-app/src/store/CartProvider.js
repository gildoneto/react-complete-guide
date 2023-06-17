/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import { useMemo } from 'react';
import CartContext from './cart-context';

const CartProvider = ({ children }) => {
  const addItemToCartHandler = item => {};
  const removeItemFromCartHandler = id => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  //   const cartContextMemo = useMemo(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
