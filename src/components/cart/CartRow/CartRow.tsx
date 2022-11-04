import { Fragment } from 'react';
// Style
import styles from './CartRow.module.css';
// Utils
import { camaPrice } from '../../../utility/Utils';

export default function CartRow(props: any) {
  const { title, price } = props;
  return (
    <Fragment>
      <div className={styles.div}>
        <p>{title}</p>
        <p>{camaPrice(price.toString())} تومان</p>
      </div>
    </Fragment>
  );
}
