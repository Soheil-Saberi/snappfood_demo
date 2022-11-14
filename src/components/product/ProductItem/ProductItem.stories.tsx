import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import ProductItem from './ProductItem';
import Product from '../../../model/Product';
import ProductsValues from '../../../utility/ProductsValues';

interface Args {
  product: Product;
}

export default {
  component: ProductItem,
  title: 'Product/Item'
} as ComponentMeta<typeof ProductItem>;

export const ProductItemStory: ComponentStory<typeof ProductItem> = (args: Args) => {
  return (
    <Provider store={store}>
      <ProductItem product={args.product} />
    </Provider>
  );
};

ProductItemStory.args = {
  product: ProductsValues[1]
};
