import { Fragment } from 'react';
//Style
import styles from './Header.module.css';
//Icons
import logo from '../../../assets/images/snappfood-logo.png';
import userIcon from '../../../assets/images/user.png';
import orderIcon from '../../../assets/images/order.png';

export default function Header() {
  return (
    <Fragment>
      <aside className={styles.aside}>
        <img className={styles.logo} src={logo} alt="snappfood-logo" />
        <input type="text" className={styles.input} placeholder="جستجو در رستوران" />
        <div className={styles.divIcon}>
          <img src={userIcon} alt="user-icon" />
          <img src={orderIcon} alt="user-icon" />
        </div>
      </aside>
    </Fragment>
  );
}
