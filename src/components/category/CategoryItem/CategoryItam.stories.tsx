import { ComponentMeta, ComponentStory } from '@storybook/react';
import Category from '../../../model/Category';
import CategoryValues from '../../../utility/CategoryValues';
import CategoryItem from './CategoryItem';

interface Args {
  category: Category;
}

export default {
  component: CategoryItem,
  title: 'Category/Item'
} as ComponentMeta<typeof CategoryItem>;

export const CategoryItemStory: ComponentStory<typeof CategoryItem> = (args: Args) => (
  <CategoryItem category={args.category} />
);

CategoryItemStory.args = {
  category: CategoryValues[0]
};
