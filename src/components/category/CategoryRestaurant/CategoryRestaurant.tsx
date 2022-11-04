import { Fragment } from 'react';
//Style
import styles from './CategoryRestaurant.module.css';
// Components
import CategoryItem from '../CategoryItem/CategoryItem';
// Utils
import CategoryValues from '../../../utility/CategoryValues';

import kebabIcon from '../../../assets/images/kebab.png';

export default function CategoryRestaurant() {
  const categoryValue: any = {
    id: 1,
    title: '',
    img: kebabIcon,
    alt: 'pizza-icon'
  };
  return (
    <Fragment>
      <div className={styles.div}>
        {/* {CategoryValues.map((item) => (
          <CategoryItem key={item.id} category={item} />
        ))} */}
        <CategoryItem key={categoryValue.id} category={categoryValue} />
      </div>
    </Fragment>
  );
}
