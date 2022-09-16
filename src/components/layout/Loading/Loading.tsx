import { Fragment } from "react";
// Style
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <Fragment>
      <div className={styles.div}>
        <p>در حال بارگزاری ...</p>
      </div>
    </Fragment>
  );
}
