import { Fragment } from 'react';
//Style
import styles from './Main.module.css';
// Components
import RightSidebar from '../RightSidebar/RightSidebar';
import Products from '../../product/Products/Products';
import LeftSidebar from '../LeftSidebar/LeftSidebar';

export default function Main() {
  return (
    <Fragment>
      <main className={styles.main}>
        <RightSidebar />
        <Products />
        <LeftSidebar />
      </main>
    </Fragment>
  );
}
