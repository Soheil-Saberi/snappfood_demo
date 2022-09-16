import { Fragment } from "react";
// Style
import styles from "./RestaurantButton.module.css";
// Icons
import infoIcon from "../../../assets/images/info.png";

export default function RestaurantButton(props: any) {
  const { buttonName } = props;
  return (
    <Fragment>
      <button className={styles.button}>
        <div>
          <img src={infoIcon} alt="info-icon" />
          <p>{buttonName}</p>
        </div>
      </button>
    </Fragment>
  );
}
