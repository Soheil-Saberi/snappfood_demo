import { FC, Fragment } from 'react';
// Style
import styles from './CartSum.module.css';

interface Props {
  sum: string;
}

const CartSum: FC<Props> = ({ sum }) => {
  return (
    <Fragment>
      {sum && (
        <div className={styles.divSum}>
          <p>
            <b>مجموع</b>
          </p>
          <p>
            <b>{sum} </b> تومان
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default CartSum;
