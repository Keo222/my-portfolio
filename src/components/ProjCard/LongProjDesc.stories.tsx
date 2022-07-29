import { ComponentStory, ComponentMeta } from "@storybook/react";

import LongProjDesc from ".";

import { clientProjects } from "jsonDB";

export default {
  title: "Long Project Description",
  component: LongProjDesc,
} as ComponentMeta<typeof LongProjDesc>;

const Template: ComponentStory<typeof LongProjDesc> = (args) => (
  <LongProjDesc {...args} />
);

export const PrimaryCard = Template.bind({});

PrimaryCard.args = {
  mainHighlight: true,
  projName: clientProjects[0].name,
  projId: clientProjects[0].id,
  tech: clientProjects[0].tech,
  link: clientProjects[0].link,
  mainImg: clientProjects[0].mainImg,
  longDesc: clientProjects[0].long_description,
};

export const SecondaryCard = Template.bind({});

SecondaryCard.args = {
  mainHighlight: false,
  projName: clientProjects[0].name,
  projId: clientProjects[0].id,
  tech: clientProjects[0].tech,
  link: clientProjects[0].link,
  mainImg: clientProjects[0].mainImg,
  longDesc: clientProjects[0].long_description,
};
