import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import ProductCategory from './ProductCategory';
import { number, string } from 'prop-types';

export default {
  component: ProductCategory,
  title: 'Product/Category'
} as ComponentMeta<typeof ProductCategory>;

export const ProductCategoryStory: ComponentStory<typeof ProductCategory> = (args) => {
  return (
    <Provider store={store}>
      <ProductCategory key={args.categoryId} categoryId={args.categoryId} categoryName={args.categoryName} />
    </Provider>
  );
};

ProductCategoryStory.args = {
  categoryId: 1,
  categoryName: 'پیتزا'
};

ProductCategoryStory.argTypes = {
  categoryId: number.isRequired,
  categoryName: string.isRequired
};
