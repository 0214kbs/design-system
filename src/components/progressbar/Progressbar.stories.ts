import type { Meta, StoryObj } from "@storybook/react";
import Progressbar from "./Progressbar";

const meta = {
    title: "Components/Progressbar",
    component: Progressbar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },
    args: {
    },
} satisfies Meta<typeof Progressbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicProgressbar: Story = {
    args: {
        value: 50,
        max: 100,
    },
};

