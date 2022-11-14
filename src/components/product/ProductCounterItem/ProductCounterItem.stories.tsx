import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import ProductCounterItem from './ProductCounterItem';

interface Args {
  productId: number;
}

export default {
  component: ProductCounterItem,
  title: 'Product/Counter'
} as ComponentMeta<typeof ProductCounterItem>;

export const ProductCounterItemStory: ComponentStory<typeof ProductCounterItem> = (args: Args) => {
  return (
    <Provider store={store}>
      <ProductCounterItem productId={args.productId} />
    </Provider>
  );
};

ProductCounterItemStory.args = {
  productId: 1
};
