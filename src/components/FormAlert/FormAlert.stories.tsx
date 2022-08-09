import { ComponentStory, ComponentMeta } from "@storybook/react";
import FormAlert from ".";

export default {
  title: "Form Alert",
  component: FormAlert,
} as ComponentMeta<typeof FormAlert>;

const Template: ComponentStory<typeof FormAlert> = (args) => (
  <FormAlert {...args} />
);

export const SuccessAlert = Template.bind({});

SuccessAlert.args = {
  alertMsg: "Success Alert!",
  alertType: "success",
};

export const ErrorAlert = Template.bind({});

ErrorAlert.args = {
  alertMsg: "Error Alert!",
  alertType: "error",
};
