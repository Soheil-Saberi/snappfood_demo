import { Fragment } from "react";
// Style
import styles from "./Products.module.css";
// Utils
import CategoryValues from "../../../utility/CategoryValues";
// Components
import ProductCategory from "../ProductCategory/ProductCategory";

export default function Products() {
  return (
    <Fragment>
      <aside className={styles.aside}>
        {CategoryValues.map((item) => (
          <ProductCategory
            key={item.id}
            categoryId={item.id}
            categoryName={item.title}
          />
        ))}
      </aside>
    </Fragment>
  );
}
