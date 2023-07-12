import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
    title: "Components/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicInput: Story = {
    args: {
        // type: "text",
        placeholder: 'Input box',
    },
};
