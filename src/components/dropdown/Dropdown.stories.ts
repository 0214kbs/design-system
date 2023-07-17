import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicDropDown: Story = {
  args: {
    options: ["child 1", "child 2", "child 3"],
    isshowselected: true,
    hassizelimit: false,
  },
};

export const NotShowSelectedDropdown: Story = {
  args: {
    options: ["child 1", "child 2", "child 3"],
    isshowselected: false,
    hassizelimit: false,
  }
}

export const ScrollDropDown: Story = {
  args: {
    options: ["child 1", "child 2", "child 3", "child 4", "child 5", "child 6"],
    isshowselected: true,
    hassizelimit: true,
  },
};