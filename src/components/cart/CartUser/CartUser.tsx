import { Fragment, useMemo, memo } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
// Style
import styles from './CartUser.module.css';
// Utils
import { camaPrice, sumCountCartUser, sumPriceCartUser } from '../../../utility/Utils';
import Constants from '../../../utility/Constants';
// Model
import Cart from '../../../model/Cart';
// Components
import CartHeader from '../CartHeader/CartHeader';
import CartRow from '../CartRow/CartRow';
import CartItem from '../CartItem/CartItem';
import CartSum from '../CartSum/CartSum';
import CartButton from '../CartButton/CartButton';

export default memo(function CartUser() {
  const cartUser = useSelector((state: RootState) => state.cartUser);

  const memoSumCountCartUser = useMemo(() => sumCountCartUser(cartUser), [cartUser]);
  const memoSumPriceCartUser = useMemo(() => sumPriceCartUser(cartUser), [cartUser]);

  return (
    <Fragment>
      {memoSumCountCartUser !== '0' && (
        <div className={styles.div}>
          <CartHeader cartUser={cartUser} />
          <div className={styles.divCartItem}>
            {cartUser.map((item: Cart) => {
              return <CartItem key={item.productId} productId={item.productId} />;
            })}
          </div>
          <CartRow title="هزینه دسته بندی" price={Constants.PACK_PRICE.toString()} />
          <CartRow title="مالیات" price={Constants.TAX_PRICE.toString()} />
          <CartRow title="هزینه ارسال" price={Constants.DELIVERY_PRICE.toString()} />
          <CartSum sum={camaPrice(memoSumPriceCartUser)!} />
          <hr />
          <CartButton />
        </div>
      )}
    </Fragment>
  );
});
