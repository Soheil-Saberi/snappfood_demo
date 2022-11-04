import { Fragment } from 'react';
// Style
import styles from './Products.module.css';
// Utils
import CategoryValues from '../../../utility/CategoryValues';
// Components
import ProductCategory from '../ProductCategory/ProductCategory';
// Model
import Category from '../../../model/Category';

export default function Products() {
  return (
    <Fragment>
      <aside className={styles.aside}>
        {CategoryValues.map((item: Category) => (
          <ProductCategory key={item.id} categoryId={item.id} categoryName={item.title} />
        ))}
      </aside>
    </Fragment>
  );
}
