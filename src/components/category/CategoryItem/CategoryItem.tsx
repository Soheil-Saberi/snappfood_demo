import { Fragment } from "react";
// Style
import styles from "./CategoryItem.module.css";

export default function CategoryItem(props: any) {
  const { id, title, img, alt } = props;
  return (
    <Fragment key={id}>
      <a href={`http://localhost:3000/#${id}`} className={styles.a}>
        <img src={img} alt={alt} />
        <p>{title}</p>
      </a>
    </Fragment>
  );
}
