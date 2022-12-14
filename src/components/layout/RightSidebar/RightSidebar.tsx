import { Fragment } from 'react';
// Style
import styles from './RightSidebar.module.css';
// Components
import RestaurantDetails from '../../restaurant/RestaurantDetails/RestaurantDetails';
import RestaurantButton from '../../restaurant/RestaurantButton/RestaurantButton';
import CategoryRestaurant from '../../category/CategoryRestaurant/CategoryRestaurant';
// Utils
import RestaurantValue from '../../../utility/RestaurantValue';

export default function RightSidebar() {
  return (
    <Fragment>
      <aside className={styles.aside}>
        <RestaurantDetails restaurant={RestaurantValue} />
        <RestaurantButton buttonName="اطلاعات و نظرات" />
        <CategoryRestaurant />
      </aside>
    </Fragment>
  );
}
