import { Fragment } from 'react';
// Style
import styles from './CategoryItem.module.css';

export default function CategoryItem(props: any) {
  const { id, title, img, alt } = props;
  const baseUrl = process.env.PUBLIC_URL;
  return (
    <Fragment key={id}>
      <a href={`${baseUrl}/#${id}`} className={styles.a}>
        <img src={img} alt={alt} />
        <p>{title}</p>
      </a>
    </Fragment>
  );
}
