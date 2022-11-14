import { ComponentMeta, ComponentStory } from '@storybook/react';
import Restaurant from '../../../model/Restaurant';
import RestaurantValue from '../../../utility/RestaurantValue';
import RestaurantDetails from './RestaurantDetails';

interface Args {
  restaurant: Restaurant;
}

export default {
  component: RestaurantDetails,
  title: 'Restaurant/Details'
} as ComponentMeta<typeof RestaurantDetails>;

export const RestaurantDetailsStory: ComponentStory<typeof RestaurantDetails> = (args: Args) => {
  return (
    <aside className="self-start laptop:sticky tablet:sticky mobile:static  top-24 bg-white z-40 desktop:col-start-2 desktop:col-end-4  laptop:col-span-2  tablet:col-span-4 mobile:col-span-9  border shadow-md rounded-lg h-fit p-2">
      <RestaurantDetails restaurant={args.restaurant} />
    </aside>
  );
};

RestaurantDetailsStory.args = {
  restaurant: RestaurantValue
};
