import { ComponentMeta, ComponentStory } from '@storybook/react';
import { camaPrice } from '../../../utility/Utils';
import CartSum from './CartSum';
import { string } from 'prop-types';

export default {
  component: CartSum,
  title: 'Cart/Sum'
} as ComponentMeta<typeof CartSum>;

export const CartSumStory: ComponentStory<typeof CartSum> = (args) => {
  return (
    <div className="mt-4 gap-2 p-4 flex flex-col  border rounded-md shadow-md w-full h-fit">
      <CartSum sum={camaPrice(args.sum)!} />
    </div>
  );
};

CartSumStory.args = {
  sum: '5000000'
};

CartSumStory.argTypes = {
  sum: string.isRequired
};
