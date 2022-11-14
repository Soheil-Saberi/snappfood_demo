import { FC, Fragment, memo, useMemo } from 'react';
// Style
import styles from './ProductCounterItem.module.css';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../store/cartSlice';
import { AppDispatch, RootState } from '../../../store';
// Utils
import { toFarsi, countProduct } from '../../../utility/Utils';

interface Props {
  productId: number;
}

const ProductCounterItem: FC<Props> = ({ productId }) => {
  const cartUser = useSelector((state: RootState) => state.cartUser);
  const dispatch = useDispatch<AppDispatch>();

  const memoCountProduct = useMemo(() => countProduct(productId, cartUser), [cartUser, productId]);

  return (
    <Fragment key={productId}>
      <div className={styles.div}>
        <button type="button" onClick={() => dispatch(cartActions.addToCart(productId))}>
          +
        </button>
        <p>{toFarsi(memoCountProduct || '0')}</p>
        <button type="button" onClick={() => dispatch(cartActions.removeFromCart(productId))}>
          -
        </button>
      </div>
    </Fragment>
  );
};

export default memo(ProductCounterItem);
