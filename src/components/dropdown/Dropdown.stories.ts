import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      description: "Dropdown 내부 목록 옵션들",
    },
    headercolor: {
      defaultValue: { summary: "Button's bgcolor" },
      description: "Dropdown header 색깔",
    },
    isshowselected: {
      defaultValue: { summary: "true" },
      description: "Dropdown header에 선택한 옵션 노출 여부",
    },
    hassizelimit: {
      defaultValue: { summary: "false" },
      description: "Drodown 목록 크기 제한",
    },

  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicDropdown: Story = {
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

export const ScrollDropdown: Story = {
  args: {
    options: ["child 1", "child 2", "child 3", "child 4", "child 5", "child 6"],
    isshowselected: true,
    hassizelimit: true,
  },
};