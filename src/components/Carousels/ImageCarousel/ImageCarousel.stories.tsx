import { ComponentStory, ComponentMeta } from "@storybook/react";

import ImageCarousel from "../ImageCarousel";

import { personalImages } from "jsonDB";

export default {
  title: "Carousels/Image Carousel",
  component: ImageCarousel,
} as ComponentMeta<typeof ImageCarousel>;

const Template: ComponentStory<typeof ImageCarousel> = (args) => (
  <ImageCarousel {...args} />
);

export const MainImageCarousel = Template.bind({});

MainImageCarousel.args = {
  images: personalImages,
};
