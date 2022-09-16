import { Fragment } from "react";
// Style
import styles from "./ProductCategory.module.css";

export default function ProductCategory(props: any) {
  const { categoryId, categoryName } = props;
  return (
    <Fragment key={categoryId}>
      <div id={categoryId} className={styles.div}>
        <div className={styles.divTitle}>
          <p>{categoryName}</p>
        </div>
        <div className={styles.divProducts}></div>
      </div>
    </Fragment>
  );
}
