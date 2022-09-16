import { Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
// Style
import styles from './LeftSidebar.module.css';
// Components
import DeliveryDetails from '../../delivery/DeliveryDetails/DeliveryDetails';
import EmptyCart from '../../cart/EmptyCart/EmptyCart';
import CartUser from '../../cart/CartUser/CartUser';

export default function LeftSidebar() {
  const cartUser = useSelector((state: any) => state.cartUser);
  return (
    <Fragment>
      <aside className={styles.aside}>
        <DeliveryDetails deliveryPrice={15000} />
        {cartUser.length ? <CartUser /> : <EmptyCart />}
      </aside>
    </Fragment>
  );
}
