import { Fragment, FC } from 'react';
// Style
import styles from './RestaurantDetails.module.css';
// Utils
import { toFarsi } from '../../../utility/Utils';
// Icons
import starIcon from '../../../assets/images/star.png';
// Model
import Restaurant from '../../../model/Restaurant';

interface Props {
  restaurant: Restaurant;
}

const RestaurantDetails: FC<Props> = ({ restaurant }) => {
  return (
    <Fragment>
      <div className={styles.div}>
        <div className={styles.divImg}>
          <img src={restaurant.img} alt="img-restaurant" />
        </div>
        <div className={styles.divDetails}>
          <div>
            <img src={starIcon} alt="star-icon" />
            <p className={styles.pStart}>{toFarsi(restaurant.star)}</p>
            <p className={styles.pCommment}>({toFarsi(restaurant.comment)} نظر)</p>
          </div>
          <p className={styles.pName}>{restaurant.name}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default RestaurantDetails;
