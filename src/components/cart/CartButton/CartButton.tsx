import { Fragment } from 'react';
// Style
import styles from './CartButton.module.css';
// Toast
import { toast } from 'react-toastify';

export default function CartButton() {
  return (
    <Fragment>
      <button
        type="button"
        className={styles.button}
        onClick={() =>
          toast.success('سفارش با موفقیت ثبت شد', {
            position: toast.POSITION.BOTTOM_RIGHT,
            theme: 'colored'
          })
        }
      >
        ثبت سفارش
      </button>
    </Fragment>
  );
}
