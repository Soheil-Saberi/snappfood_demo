import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import CartHeader from './CartHeader';
import { array } from 'prop-types';

export default {
  component: CartHeader,
  title: 'Cart/Header'
} as ComponentMeta<typeof CartHeader>;

export const CartHeaderStory: ComponentStory<typeof CartHeader> = (args) => {
  return (
    <Provider store={store}>
      <div className="mt-4 gap-2 p-4 flex flex-col  border rounded-md shadow-md w-full h-fit">
        <CartHeader cartUser={args.cartUser} />
      </div>
    </Provider>
  );
};

CartHeaderStory.args = {
  cartUser: [
    { productId: 1, count: 1 },
    { productId: 2, count: 2 }
  ]
};

CartHeaderStory.argTypes = {
  cartUser: array.isRequired
};
