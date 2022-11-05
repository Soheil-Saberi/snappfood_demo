import { Fragment, FC } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { cartActions } from '../../../store/cartSlice';
// Style
import styles from './CartHeader.module.css';
// Icons
import deleteIcon from '../../../assets/images/delete.png';
// Utils
import { toFarsi } from '../../../utility/Utils';
// Model
import Cart from '../../../model/Cart';

interface Props {
  cartUser: Cart[];
}

const CartHeader: FC<Props> = ({ cartUser }) => {
  const dispatch = useDispatch<AppDispatch>();

  const sumOrderUser = (cartUser: Cart[]): string => {
    return cartUser
      .reduce((previousValue: any, currentValue: any) => {
        return previousValue + currentValue.count;
      }, 0)
      .toString();
  };

  return (
    <Fragment>
      <div className={styles.div}>
        <p>سبد خرید ({toFarsi(sumOrderUser(cartUser))})</p>
        <img onClick={() => dispatch(cartActions.emptyCart())} src={deleteIcon} alt="delete-icon" />
      </div>
    </Fragment>
  );
};

export default CartHeader;
