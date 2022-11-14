import { FC, Fragment } from 'react';
// Style
import styles from './Error.module.css';

interface Props {
  message: string;
}

const Error: FC<Props> = ({ message }) => {
  return (
    <Fragment>
      <div className={styles.div}>
        <p>خطا !!!</p>
        <p>{message}</p>
      </div>
    </Fragment>
  );
};

export default Error;
