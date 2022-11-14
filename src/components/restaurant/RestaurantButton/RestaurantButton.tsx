import { Fragment, FC } from 'react';
// Style
import styles from './RestaurantButton.module.css';
// Icons
import infoIcon from '../../../assets/images/info.png';

interface Props {
  buttonName: string;
}

const RestaurantButton: FC<Props> = ({ buttonName }) => {
  return (
    <Fragment>
      <button type="button" className={styles.button}>
        <div>
          <img src={infoIcon} alt="info-icon" />
          <p>{buttonName}</p>
        </div>
      </button>
    </Fragment>
  );
};

export default RestaurantButton;
