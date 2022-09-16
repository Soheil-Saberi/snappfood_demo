import { Fragment } from "react";
// Style
import styles from "./ProductCategory.module.css";
// Utils
import ProductsValues from "../../../utility/ProductsValues";
// Components
import ProductItem from "../ProductItem/ProductItem";

export default function ProductCategory(props: any) {
  const { categoryId, categoryName } = props;
  return (
    <Fragment key={categoryId}>
      <div id={categoryId} className={styles.div}>
        <div className={styles.divTitle}>
          <p>{categoryName}</p>
        </div>
        <div className={styles.divProducts}>
          {ProductsValues.filter(
            (product) => product.category === categoryId
          ).map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              img={item.img}
              alt={item.alt}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
