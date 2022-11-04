import { Fragment } from 'react';
// Model
import Category from '../../../model/Category';
// Style
import styles from './CategoryItem.module.css';

interface Props {
  category: Category;
}

const CategoryItem: React.FC<Props> = ({ category }) => {
  const baseUrl = process.env.PUBLIC_URL;
  return (
    <Fragment key={category.id}>
      {category.title && (
        <a href={`${baseUrl}/#${category.id}`} className={styles.a}>
          <img src={category.img} alt={category.alt} />
          <p>{category.title}</p>
        </a>
      )}
    </Fragment>
  );
};

export default CategoryItem;
