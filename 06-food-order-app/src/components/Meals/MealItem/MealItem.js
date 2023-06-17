import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

import styles from './MealItem.module.css';

const MealItem = ({ name, description, price, id }) => {
  const { addItem } = useContext(CartContext);
  const priceFixed = `$${price.toFixed(2)}`;

  const addToCartHandler = amount => {
    addItem({
      id,
      name,
      amount,
      price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{priceFixed}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
