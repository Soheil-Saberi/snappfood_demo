import { Fragment } from "react";
//Style
import styles from "./Main.module.css";
// Components
import RightSidebar from "../RightSidebar/RightSidebar";
import Products from "../../product/Products/Products";
import LeftSidebar from "../LeftSidebar/LeftSidebar";

export default function Main() {
  return (
    <Fragment>
      <div className={styles.div}>
        <RightSidebar />
        <Products />
        <LeftSidebar />
      </div>
    </Fragment>
  );
}
