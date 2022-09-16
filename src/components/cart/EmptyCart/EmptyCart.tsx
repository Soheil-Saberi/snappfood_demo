import { Fragment } from 'react';
// Style
import styles from './EmptyCart.module.css';
// Icons
import emptyCartIcon from '../../../assets/images/bag.png';

export default function EmptyCart() {
  return (
    <Fragment>
      <div className={styles.div}>
        <img src={emptyCartIcon} alt="cart-icon" />
        <p>سبد خرید شما خالی است!</p>
      </div>
    </Fragment>
  );
}
