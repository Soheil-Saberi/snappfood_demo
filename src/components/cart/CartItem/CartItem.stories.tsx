import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import CartItem from './CartItem';
import { number } from 'prop-types';

export default {
  component: CartItem,
  title: 'Cart/Item'
} as ComponentMeta<typeof CartItem>;

export const CartItemStory: ComponentStory<typeof CartItem> = (args) => {
  return (
    <Provider store={store}>
      <div className="mt-4 gap-2 p-4 flex flex-col  border rounded-md shadow-md w-full h-fit">
        <div className="mt-3 flex flex-col gap-2">
          <CartItem key={args.productId} productId={args.productId} />
        </div>
      </div>
    </Provider>
  );
};

CartItemStory.args = {
  productId: 1
};

CartItemStory.argTypes = {
  productId: number.isRequired
};
