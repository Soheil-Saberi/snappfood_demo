import { Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
// Style
import styles from './CartUser.module.css';
// Utils
import ProductsValues from '../../../utility/ProductsValues';
import { camaPrice } from '../../../utility/Utils';
// Components
import CartHeader from '../CartHeader/CartHeader';
import CartRow from '../CartRow/CartRow';
import CartItem from '../CartItem/CartItem';
import CartSum from '../CartSum/CartSum';
import CartButton from '../CartButton/CartButton';

export default function CartUser() {
  const cartUser = useSelector((state: any) => state.cartUser);

  const PACK_PRICE = 5000;
  const TAX_PRICE = 12000;
  const DELIVERY_PRICE = 15000;

  const priceProduct = (productId: number): number | undefined => {
    return parseInt(ProductsValues.find((item: any) => item.id === productId)?.price!);
  };

  const sumCartUser = (): string => {
    return cartUser.reduce((previousValue: any, currentValue: any) => {
      return (
        previousValue +
        priceProduct(currentValue.productId)! * currentValue.count +
        TAX_PRICE +
        DELIVERY_PRICE +
        PACK_PRICE
      );
    }, 0);
  };

  return (
    <Fragment>
      <div className={styles.div}>
        <CartHeader cartUser={cartUser} />
        <div className={styles.divCartItem}>
          {cartUser.map((item: any) => {
            return <CartItem key={item.productId} productId={item.productId} />;
          })}
        </div>
        <CartRow title="هزینه دسته بندی" price={PACK_PRICE} />
        <CartRow title="مالیات" price={TAX_PRICE} />
        <CartRow title="هزینه ارسال" price={DELIVERY_PRICE} />
        <CartSum sum={camaPrice(sumCartUser().toString())} />
        <hr />
        <CartButton />
      </div>
    </Fragment>
  );
}
