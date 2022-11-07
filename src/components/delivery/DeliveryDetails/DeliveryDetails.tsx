import { Fragment, FC } from 'react';
// Style
import styles from './DeliveryDetails.module.css';
// Icons
import deliveryIcon from '../../../assets/images/delivery.png';
// Utils
import { camaPrice } from '../../../utility/Utils';

interface Props {
  deliveryPrice: string;
}

const DeliveryDetails: FC<Props> = ({ deliveryPrice }) => {
  return (
    <Fragment>
      <div className={styles.div}>
        <img src={deliveryIcon} alt="delivery-icon" />
        <p>پیک فروشنده : {camaPrice(deliveryPrice)} تومان</p>
      </div>
    </Fragment>
  );
};

export default DeliveryDetails;
