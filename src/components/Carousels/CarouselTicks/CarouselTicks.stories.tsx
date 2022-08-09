import { ComponentStory, ComponentMeta } from "@storybook/react";

import CarouselTicks from "../CarouselTicks";

export default {
  title: "Carousels/Carousel Ticks",
  component: CarouselTicks,
} as ComponentMeta<typeof CarouselTicks>;

const Template: ComponentStory<typeof CarouselTicks> = (args) => (
  <CarouselTicks {...args} />
);

export const Primary_5_Ticks = Template.bind({});

Primary_5_Ticks.args = {
  numSlides: 5,
  current: 1,
  setCurrent: () => 2,
  color: "primary",
};

export const Secondary_5_Ticks = Template.bind({});

Secondary_5_Ticks.args = {
  numSlides: 5,
  current: 0,
  setCurrent: () => 2,
  color: "secondary",
};
