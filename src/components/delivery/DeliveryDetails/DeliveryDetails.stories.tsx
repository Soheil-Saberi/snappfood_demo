import { ComponentMeta, ComponentStory } from '@storybook/react';
import DeliveryDetails from './DeliveryDetails';

interface Args {
  deliveryPrice: string;
}

export default {
  component: DeliveryDetails,
  title: 'Delivery/Details'
} as ComponentMeta<typeof DeliveryDetails>;

export const DeliveryDetailsStory: ComponentStory<typeof DeliveryDetails> = (args: Args) => (
  <DeliveryDetails deliveryPrice={args.deliveryPrice} />
);

DeliveryDetailsStory.args = {
  deliveryPrice: '15000'
};
