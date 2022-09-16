import { Fragment } from "react";
// Style
import styles from "./LeftSidebar.module.css";
// Components
import DeliveryDetails from "../../delivery/DeliveryDetails/DeliveryDetails";
import EmptyCart from "../../cart/EmptyCart/EmptyCart";

export default function LeftSidebar() {
  return (
    <Fragment>
      <aside className={styles.aside}>
        <DeliveryDetails deliveryPrice={15000} />
        <EmptyCart />
      </aside>
    </Fragment>
  );
}
