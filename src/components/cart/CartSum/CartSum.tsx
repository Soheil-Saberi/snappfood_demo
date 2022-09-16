import { Fragment } from "react";
// Style
import styles from "./CartSum.module.css";

export default function CartSum(props: any) {
  const { sum } = props;
  return (
    <Fragment>
      <div className={styles.divSum}>
        <p>
          <b>مجموع</b>
        </p>
        <p>
          <b>{sum} </b> تومان
        </p>
      </div>
    </Fragment>
  );
}
