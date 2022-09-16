import { Fragment } from "react";
// Redux
import { useSelector } from "react-redux";
// Style
import styles from "./CartUser.module.css";
// Utils
import ProductsValues from "../../../utility/ProductsValues";
import { camaPrice } from "../../../utility/Utils";

export default function CartUser() {
  const cartUser = useSelector((state: any) => state.cartUser);

  const PACK_PRICE = 5000;
  const TAX_PRICE = 12000;
  const DELIVERY_PRICE = 15000;

  const priceProduct = (productId: number) => {
    return ProductsValues.find((item: any) => item.id === productId)?.price;
  };

  const sumCartUser = () => {
    return cartUser.reduce((previousValue: any, currentValue: any) => {
      return (
        previousValue +
        priceProduct(currentValue.productId)! * currentValue.count +
        TAX_PRICE +
        DELIVERY_PRICE +
        PACK_PRICE
      );
    }, 0);
  };

  return (
    <Fragment>
      <div className={styles.div}></div>
    </Fragment>
  );
}
