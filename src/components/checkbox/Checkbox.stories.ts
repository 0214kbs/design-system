import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta = {
    title: "Components/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },
    args: {
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicCheckbox: Story = {
    args: {
    },
};

export const BasicHasTextCheckbox: Story = {
    args: {
        text: "test"
    },
};