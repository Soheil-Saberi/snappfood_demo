import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import ProductCategory from './ProductCategory';

interface Args {
  categoryId: number;
  categoryName: string;
}

export default {
  component: ProductCategory,
  title: 'Product/Category'
} as ComponentMeta<typeof ProductCategory>;

export const ProductCategoryStory: ComponentStory<typeof ProductCategory> = (args: Args) => {
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
