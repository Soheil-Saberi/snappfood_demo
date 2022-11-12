import { ComponentMeta, ComponentStory } from '@storybook/react';
import CartButton from './CartButton';

export default {
  component: CartButton,
  title: 'Cart/Button'
} as ComponentMeta<typeof CartButton>;

export const CartItemStory: ComponentStory<typeof CartButton> = () => {
  return (
    <div className="mt-4 gap-2 p-4 flex flex-col  border rounded-md shadow-md w-full h-fit">
      <CartButton />
    </div>
  );
};
