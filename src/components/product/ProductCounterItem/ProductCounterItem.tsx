import { FC, Fragment } from 'react';
// Style
import styles from './ProductCounterItem.module.css';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../store/cart';
import { AppDispatch, RootState } from '../../../store';
// Utils
import { toFarsi } from '../../../utility/Utils';
// Model
import Cart from '../../../model/Cart';

interface Props {
  productId: number;
}

const ProductCounterItem: FC<Props> = ({ productId }) => {
  const cartUser = useSelector((state: RootState) => state.cartUser);
  const dispatch = useDispatch<AppDispatch>();

  const countProduct = (productId: number): string => {
    return cartUser.filter((item: Cart) => item.productId === productId)[0]?.count.toString();
  };

  return (
    <Fragment key={productId}>
      <div className={styles.div}>
        <button onClick={() => dispatch(cartActions.addToCart(productId))}>+</button>
        <p>{toFarsi(countProduct(productId) || '0')}</p>
        <button onClick={() => dispatch(cartActions.removeFromCart(productId))}>-</button>
      </div>
    </Fragment>
  );
};

export default ProductCounterItem;
