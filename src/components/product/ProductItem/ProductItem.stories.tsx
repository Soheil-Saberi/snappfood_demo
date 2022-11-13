import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import ProductItem from './ProductItem';
import pizzaPic1 from './../../../assets/images/pizza-1.jpg';
import { object } from 'prop-types';

export default {
  component: ProductItem,
  title: 'Product/Item'
} as ComponentMeta<typeof ProductItem>;

export const ProductItemStory: ComponentStory<typeof ProductItem> = (args) => {
  return (
    <Provider store={store}>
      <ProductItem product={args.product} />
    </Provider>
  );
};

ProductItemStory.args = {
  product: {
    id: 1,
    category: 1,
    title: 'پیتزا کراکف',
    description: 'خمیر تازه دست ساز، سس مخصوص، سوسیس کراکف پنیری دودی، قارچ، پنیر ترکیبی، فلفل دلمه، زیتون اسلایس شده',
    img: pizzaPic1,
    price: '250000',
    alt: 'pizza-pic1'
  }
};

ProductItemStory.argTypes = {
  product: object.isRequired
};
