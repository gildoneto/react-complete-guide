import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img
          src={mealsImage}
          alt="barbecue-grilled-beef by https://www.freepik.com/author/timolina on freepik"
        />
      </div>
    </>
  );
};

export default Header;
