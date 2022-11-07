import { Fragment, memo, useMemo } from 'react';
// Style
import styles from './EmptyCart.module.css';
// Icons
import emptyCartIcon from '../../../assets/images/bag.png';
// Redux
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
// Utils
import { sumCountCartUser } from '../../../utility/Utils';

export default memo(function EmptyCart() {
  const cartUser = useSelector((state: RootState) => state.cartUser);

  const memoSumCountCartUser = useMemo(() => sumCountCartUser(cartUser), [cartUser]);
  return (
    <Fragment>
      {memoSumCountCartUser === '0' && (
        <div className={styles.div}>
          <img src={emptyCartIcon} alt="cart-icon" />
          <p>سبد خرید شما خالی است!</p>
        </div>
      )}
    </Fragment>
  );
});
