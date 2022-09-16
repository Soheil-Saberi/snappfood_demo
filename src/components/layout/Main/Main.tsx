import { Fragment } from "react";
//Style
import styles from "./Main.module.css";
// Components
import RightSidebar from "../RightSidebar/RightSidebar";

export default function Main() {
  return (
    <Fragment>
      <div className={styles.div}>
        <RightSidebar />
      </div>
    </Fragment>
  );
}
