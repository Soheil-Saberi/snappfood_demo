import { ComponentMeta, ComponentStory } from '@storybook/react';
import CategoryRestaurant from './CategoryRestaurant';

export default {
  component: CategoryRestaurant,
  title: 'Category/Restaurant'
} as ComponentMeta<typeof CategoryRestaurant>;

export const CategoryRestaurantStory: ComponentStory<typeof CategoryRestaurant> = () => <CategoryRestaurant />;
