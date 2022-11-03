import { Fragment } from 'react';
// Style
import styles from './CartItem.module.css';
// Utils
import ProductsValues from '../../../utility/ProductsValues';
import { camaPrice } from '../../../utility/Utils';
// Components
import ProductCounterItem from '../../product/ProductCounterItem/ProductCounterItem';

export default function CartItem(props: any) {
  const { productId } = props;

  const product = ProductsValues.find((item) => item.id === productId);

  return (
    <Fragment key={productId}>
      <div className={styles.div}>
        <p className={styles.pTitle}>{product?.title}</p>
        <div className={styles.divPrice}>
          <p>
            <b>{camaPrice(product!.price)} </b> تومان
          </p>
          <ProductCounterItem productId={productId} />
        </div>
        <hr />
      </div>
    </Fragment>
  );
}
