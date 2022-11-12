import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import EmptyCart from './EmptyCart';

export default {
  component: EmptyCart,
  title: 'Cart/Empty'
} as ComponentMeta<typeof EmptyCart>;

export const CartHeaderStory: ComponentStory<typeof EmptyCart> = () => {
  return (
    <Provider store={store}>
      <EmptyCart />;
    </Provider>
  );
};
