import { FC, Fragment } from 'react';
// Style
import styles from './ProductItem.module.css';
// Utils
import { camaPrice } from '../../../utility/Utils';
// Components
import ProductCounterItem from './../ProductCounterItem/ProductCounterItem';
// Model
import Product from '../../../model/Product';
interface Props {
  product: Product;
}

const ProductItem: FC<Props> = ({ product }) => {
  return (
    <Fragment key={product.id}>
      <div className={styles.divItem}>
        <div className={styles.divTop}>
          <div className={styles.divText}>
            <p className={styles.pTitle}>{product.title}</p>
            <p className={styles.pDescription}>{product.description}</p>
          </div>
          <div className={styles.divImg}>
            <img src={product.img} alt={product.alt} />
          </div>
        </div>
        <div className={styles.divBottom}>
          <p>تومان {camaPrice(product.price)}</p>
          <ProductCounterItem productId={product.id} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductItem;
