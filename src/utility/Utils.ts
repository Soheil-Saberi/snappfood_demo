import Numeral from 'numeral';
// Model
import Cart from '../model/Cart';
import Product from '../model/Product';
// Utils
import Constants from './Constants';
import ProductsValues from './ProductsValues';

const toFarsi = (num: string): string | null => {
  if (!num.length || isNaN(parseInt(num))) {
    return null;
  }
  return num.replace(/\d/g, (d: any) => '۰۱۲۳۴۵۶۷۸۹'[d]);
};

const camaPrice = (num: string): string | null => {
  if (!num.length || isNaN(parseInt(num))) {
    return null;
  }
  return toFarsi(Numeral(num).format('0,0'));
};

// Total number of cart products
const sumCountCartUser = (cartUser: Cart[]): string => {
  return cartUser
    .reduce((previousValue: number, currentValue: Cart) => {
      return previousValue + currentValue.count;
    }, 0)
    .toString();
};

// Total price of products in the cart
const sumPriceCartUser = (cartUser: Cart[]): string => {
  return cartUser
    .reduce((previousValue: number, currentValue: Cart) => {
      return (
        previousValue +
        priceProduct(currentValue.productId)! * currentValue.count +
        Constants.TAX_PRICE +
        Constants.DELIVERY_PRICE +
        Constants.PACK_PRICE
      );
    }, 0)
    .toString();
};

const priceProduct = (productId: number): number | undefined => {
  return parseInt(ProductsValues.find((item: Product) => item.id === productId)!.price);
};

const countProduct = (productId: number, cartUser: Cart[]): string => {
  return cartUser.filter((item: Cart) => item.productId === productId)[0]?.count.toString();
};

export { toFarsi, camaPrice, sumCountCartUser, sumPriceCartUser, countProduct };
