import { Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
// Style
import styles from './CartUser.module.css';
// Utils
import ProductsValues from '../../../utility/ProductsValues';
import { camaPrice } from '../../../utility/Utils';
// Model
import Cart from '../../../model/Cart';
import Product from '../../../model/Product';
// Components
import CartHeader from '../CartHeader/CartHeader';
import CartRow from '../CartRow/CartRow';
import CartItem from '../CartItem/CartItem';
import CartSum from '../CartSum/CartSum';
import CartButton from '../CartButton/CartButton';

export default function CartUser() {
  const cartUser = useSelector((state: RootState) => state.cartUser);

  const PACK_PRICE: number = 5000;
  const TAX_PRICE: number = 12000;
  const DELIVERY_PRICE: number = 15000;

  const priceProduct = (productId: number): number | undefined => {
    return parseInt(ProductsValues.find((item: Product) => item.id === productId)?.price!);
  };

  const sumCartUser = (): string => {
    return cartUser
      .reduce((previousValue: number, currentValue: Cart) => {
        return (
          previousValue +
          priceProduct(currentValue.productId)! * currentValue.count +
          TAX_PRICE +
          DELIVERY_PRICE +
          PACK_PRICE
        );
      }, 0)
      .toString();
  };

  return (
    <Fragment>
      <div className={styles.div}>
        <CartHeader cartUser={cartUser} />
        <div className={styles.divCartItem}>
          {cartUser.map((item: Cart) => {
            return <CartItem key={item.productId} productId={item.productId} />;
          })}
        </div>
        <CartRow title="هزینه دسته بندی" price={PACK_PRICE.toString()} />
        <CartRow title="مالیات" price={TAX_PRICE.toString()} />
        <CartRow title="هزینه ارسال" price={DELIVERY_PRICE.toString()} />
        <CartSum sum={camaPrice(sumCartUser())!} />
        <hr />
        <CartButton />
      </div>
    </Fragment>
  );
}
