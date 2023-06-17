import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';

const MealItem = ({ name, description, price, id }) => {
  const priceFixed = `$${price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{priceFixed}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
