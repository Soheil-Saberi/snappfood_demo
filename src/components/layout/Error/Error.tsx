import { Fragment } from 'react';
// Style
import styles from './Error.module.css';

export default function Error(props: any) {
  const { message } = props;
  return (
    <Fragment>
      <div className={styles.div}>
        <p>خطا !!!</p>
        <p>{message}</p>
      </div>
    </Fragment>
  );
}
