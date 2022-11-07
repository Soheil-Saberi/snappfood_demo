import { FC, Fragment } from 'react';
// Style
import styles from './CartRow.module.css';
// Utils
import { camaPrice } from '../../../utility/Utils';

interface Props {
  title: string;
  price: string;
}

const CartRow: FC<Props> = ({ title, price }) => {
  return (
    <Fragment>
      {(price || price) && (
        <div className={styles.div}>
          <p>{title}</p>
          <p>{camaPrice(price)} تومان</p>
        </div>
      )}
    </Fragment>
  );
};

export default CartRow;
