import { Fragment, FC, useMemo } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { cartActions } from '../../../store/cartSlice';
// Style
import styles from './CartHeader.module.css';
// Icons
import deleteIcon from '../../../assets/images/delete.png';
// Utils
import { sumCountCartUser, toFarsi } from '../../../utility/Utils';
// Model
import Cart from '../../../model/Cart';

interface Props {
  cartUser: Cart[];
}

const CartHeader: FC<Props> = ({ cartUser }) => {
  const dispatch = useDispatch<AppDispatch>();

  const memoSumOrderUser = useMemo(() => sumCountCartUser(cartUser), [cartUser]);

  return (
    <Fragment>
      {memoSumOrderUser !== '0' && (
        <div className={styles.div}>
          <p>سبد خرید ({toFarsi(memoSumOrderUser)})</p>
          <img onClick={() => dispatch(cartActions.emptyCart())} src={deleteIcon} alt="delete-icon" />
        </div>
      )}
    </Fragment>
  );
};

export default CartHeader;
