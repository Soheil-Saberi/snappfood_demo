import { Fragment } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart';
// Style
import styles from './CartHeader.module.css';
// Icons
import deleteIcon from '../../../assets/images/delete.png';
// Utils
import { camaPrice } from '../../../utility/Utils';

const sumOrderUser = (cartUser: any): number => {
  return cartUser.reduce((previousValue: any, currentValue: any) => {
    return previousValue + currentValue.count;
  }, 0);
};

export default function CartHeader(props: any) {
  const { cartUser } = props;

  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className={styles.div}>
        <p>سبد خرید ({camaPrice(sumOrderUser(cartUser).toString())})</p>
        <img onClick={() => dispatch(cartActions.emptyCart())} src={deleteIcon} alt="delete-icon" />
      </div>
    </Fragment>
  );
}
