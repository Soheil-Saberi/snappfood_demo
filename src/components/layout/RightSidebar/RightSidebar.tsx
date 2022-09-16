import { Fragment } from "react";
// Style
import styles from "./RightSidebar.module.css";
// Components
import RestaurantDetails from "../../restaurant/RestaurantDetails/RestaurantDetails";
import RestaurantButton from "../../restaurant/RestaurantButton/RestaurantButton";
import CategoryRestaurant from "../../category/CategoryRestaurant/CategoryRestaurant";

export default function RightSidebar() {
  return (
    <Fragment>
      <aside className={styles.aside}>
        <RestaurantDetails name="رستوران سالانی" star="4.5" comment="500" />
        <RestaurantButton buttonName="اطلاعات و نظرات" />
        <CategoryRestaurant />
      </aside>
    </Fragment>
  );
}
