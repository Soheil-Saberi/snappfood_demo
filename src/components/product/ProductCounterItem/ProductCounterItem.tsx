import { Fragment } from 'react';
// Style
import styles from './ProductCounterItem.module.css';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../store/cart';
// Utils
import { toFarsi } from '../../../utility/Utils';

export default function ProductCounterItem(props: any) {
  const { productId } = props;

  const cartUser = useSelector((state: any) => state.cartUser);
  const dispatch = useDispatch();

  const countProduct = (productId: number) => {
    return cartUser.filter((item: any) => item.productId === productId)[0]?.count.toString();
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
}
