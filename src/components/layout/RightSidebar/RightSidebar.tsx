import { Fragment } from "react";
// Style
import styles from "./RightSidebar.module.css";
// Components
import RestaurantDetails from "../../restaurant/RestaurantDetails/RestaurantDetails";

export default function RightSidebar() {
  return (
    <Fragment>
      <aside className={styles.aside}>
        <RestaurantDetails name="رستوران سالانی" star="4.5" comment="500" />
      </aside>
    </Fragment>
  );
}
