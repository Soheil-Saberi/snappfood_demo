import { Fragment } from 'react';
// Style
import styles from './ProductItem.module.css';
// Utils
import { camaPrice } from '../../../utility/Utils';
// Components
import ProductCounterItem from './../ProductCounterItem/ProductCounterItem';

export default function ProductItem(props: any) {
  const { id, title, img, alt, description, price } = props;

  return (
    <Fragment key={id}>
      <div className={styles.divItem}>
        <div className={styles.divTop}>
          <div className={styles.divText}>
            <p className={styles.pTitle}>{title}</p>
            <p className={styles.pDescription}>{description}</p>
          </div>
          <div className={styles.divImg}>
            <img src={img} alt={alt} />
          </div>
        </div>
        <div className={styles.divBottom}>
          <p>تومان {camaPrice(price)}</p>
          <ProductCounterItem productId={id} />
        </div>
      </div>
    </Fragment>
  );
}
