import { ComponentMeta, ComponentStory } from '@storybook/react';
import RestaurantButton from './RestaurantButton';

interface Args {
  buttonName: string;
}

export default {
  component: RestaurantButton,
  title: 'Restaurant/Button'
} as ComponentMeta<typeof RestaurantButton>;

export const RestaurantButtonStory: ComponentStory<typeof RestaurantButton> = (args: Args) => (
  <RestaurantButton buttonName={args.buttonName} />
);

RestaurantButtonStory.args = {
  buttonName: 'ثبت نظرات'
};
