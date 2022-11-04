import { Fragment } from 'react';
//Style
import styles from './CategoryRestaurant.module.css';
// Components
import CategoryItem from '../CategoryItem/CategoryItem';
// Utils
import CategoryValues from '../../../utility/CategoryValues';

export default function CategoryRestaurant() {
  return (
    <Fragment>
      <div className={styles.div}>
        {CategoryValues.map((item) => (
          <CategoryItem key={item.id} category={item} />
        ))}
      </div>
    </Fragment>
  );
}
