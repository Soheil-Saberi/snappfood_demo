import { Fragment } from "react";
// Style
import styles from "./DeliveryDetails.module.css";
// Icons
import deliveryIcon from "../../../assets/images/delivery.png";
// Utils
import { camaPrice } from "../../../utility/Utils";

export default function DeliveryDetails(props: any) {
  const { deliveryPrice } = props;
  return (
    <Fragment>
      <div className={styles.div}>
        <img src={deliveryIcon} alt="delivery-icon" />
        <p>پیک فروشنده : {camaPrice(deliveryPrice)} تومان</p>
      </div>
    </Fragment>
  );
}
