import { Fragment } from 'react';
// Style
import styles from './CartButton.module.css';

export default function CartButton() {
  return (
    <Fragment>
      <button type="button" className={styles.button} onClick={() => alert('سفارش با موفقیت ثبت شد')}>
        ثبت سفارش
      </button>
    </Fragment>
  );
}
