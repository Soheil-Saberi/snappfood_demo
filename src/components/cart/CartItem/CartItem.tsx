import { FC, Fragment, memo } from 'react';
// Style
import styles from './CartItem.module.css';
// Utils
import ProductsValues from '../../../utility/ProductsValues';
import { camaPrice } from '../../../utility/Utils';
// Model
import Product from '../../../model/Product';
// Components
import ProductCounterItem from '../../product/ProductCounterItem/ProductCounterItem';

interface Props {
  productId: number;
}

const CartItem: FC<Props> = ({ productId }) => {
  const product = ProductsValues.find((item: Product) => item.id === productId);

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
};

export default memo(CartItem);
