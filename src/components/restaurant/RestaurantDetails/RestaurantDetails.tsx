import { Fragment } from "react";
// Style
import styles from "./RestaurantDetails.module.css";
// Utils
import { toFarsi } from "../../../utility/Utils";
// Icons
import restaurantImg from "../../../assets/images/restaurant-img.png";
import starIcon from "../../../assets/images/star.png";

export default function RestaurantDetails(props: any) {
  const { name, star, comment } = props;
  return (
    <Fragment>
      <div className={styles.div}>
        <div className={styles.divImg}>
          <img src={restaurantImg} alt="img-restaurant" />
        </div>
        <div className={styles.divDetails}>
          <div>
            <img src={starIcon} alt="star-icon" />
            <p className={styles.pStart}>{toFarsi(star)}</p>
            <p className={styles.pCommment}>({toFarsi(comment)} نظر)</p>
          </div>
          <p className={styles.pName}>{name}</p>
        </div>
      </div>
    </Fragment>
  );
}
