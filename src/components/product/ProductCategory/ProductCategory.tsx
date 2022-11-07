import { FC, Fragment } from 'react';
// Style
import styles from './ProductCategory.module.css';
// Utils
import ProductsValues from '../../../utility/ProductsValues';
// Components
import ProductItem from '../ProductItem/ProductItem';
// Model
import Product from '../../../model/Product';

interface Props {
  categoryId: number;
  categoryName: string;
}

const ProductCategory: FC<Props> = ({ categoryId, categoryName }) => {
  return (
    <Fragment key={categoryId}>
      <div id={categoryId.toString()} className={styles.div}>
        <div className={styles.divTitle}>
          <p>{categoryName}</p>
        </div>
        <div className={styles.divProducts}>
          {ProductsValues.filter((product: Product) => product.category === categoryId).map((item: Product) => (
            <ProductItem product={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCategory;
