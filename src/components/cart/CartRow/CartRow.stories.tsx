import { ComponentMeta, ComponentStory } from '@storybook/react';
import CartRow from './CartRow';
import { string } from 'prop-types';

export default {
  component: CartRow,
  title: 'Cart/Row'
} as ComponentMeta<typeof CartRow>;

export const CartRowStory: ComponentStory<typeof CartRow> = (args) => {
  return (
    <div className="mt-4 gap-2 p-4 flex flex-col  border rounded-md shadow-md w-full h-fit">
      <CartRow title={args.title} price={args.price} />
    </div>
  );
};

CartRowStory.args = {
  title: 'هزینه دسته بندی',
  price: '500000'
};

CartRowStory.argTypes = {
  title: string.isRequired,
  price: string.isRequired
};
