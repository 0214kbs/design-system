import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown"

const meta = {
    title: "Components/Dropdown",
    component: Dropdown,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
}

export default meta;
type Story = StoryObj<typeof meta>;

export const DropDown: Story = {
    args: {},
};