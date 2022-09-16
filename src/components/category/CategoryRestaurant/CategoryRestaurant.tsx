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
          <CategoryItem key={item.id} id={item.id} title={item.title} img={item.img} alt={item.alt} />
        ))}
      </div>
    </Fragment>
  );
}
