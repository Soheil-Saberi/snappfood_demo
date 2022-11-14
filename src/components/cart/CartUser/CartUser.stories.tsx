import CartHeader from '../CartHeader/CartHeader';
import CartItem from '../CartItem/CartItem';
import CartRow from '../CartRow/CartRow';
import CartSum from '../CartSum/CartSum';
import CartButton from '../CartButton/CartButton';
import { Provider } from 'react-redux';
import store from '../../../store';
import Cart from '../../../model/Cart';
import Constants from '../../../utility/Constants';
import { camaPrice } from '../../../utility/Utils';

interface Row {
  title: string;
  price: string;
}

interface Args {
  cartUser: Cart[];
  rows: Row[];
  sum: string;
}

export default {
  title: 'Cart/Cart'
};

export const CartUserStory = (args: Args) => {
  return (
    <Provider store={store}>
      <div className="mt-4 gap-2 p-4 flex flex-col  border rounded-md shadow-md w-full h-fit">
        <CartHeader cartUser={args.cartUser} />
        <div className="mt-3 flex flex-col gap-2">
          {args.cartUser.map((item: Cart) => {
            return <CartItem key={item.productId} productId={item.productId} />;
          })}
        </div>
        {args.rows.map((row: any) => (
          <CartRow title={row.title} price={row.price} />
        ))}
        <CartSum sum={camaPrice(args.sum)!} />
        <hr />
        <CartButton />
      </div>
    </Provider>
  );
};

CartUserStory.args = {
  cartUser: [
    { productId: 1, count: 1 },
    { productId: 2, count: 2 }
  ],
  rows: [
    {
      title: 'هزینه دسته بندی',
      price: Constants.PACK_PRICE.toString()
    },
    {
      title: 'مالیات',
      price: Constants.TAX_PRICE.toString()
    },
    {
      title: 'هزینه ارسال',
      price: Constants.DELIVERY_PRICE.toString()
    }
  ],
  sum: '500000000'
};
