import { Fragment } from 'react';
// Style
import styles from './Footer.module.css';
// Icons
import snappfoodLogo from './../../../assets/images/snappfood-logo.png';

export default function Footer() {
  return (
    <Fragment>
      <footer className={styles.footer}>
        <div className={styles.divRow}>
          <img src={snappfoodLogo} alt="snappfood-logo" />
          <div className={styles.divText}>
            <p className={styles.pSnapp}>اسنپ فود</p>
            <p className={styles.pText}>تجربه سفارش غذا، از زودفود تا اسنپ‌فود</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
