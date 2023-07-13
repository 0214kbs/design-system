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
        placeholder: {
            description: "a brief hint or guide that indicates the expected input within the input field."
        },
        name: {
            defaultValue: { summary: "Basic Input" },
            description: "a unique identifier for the input field"
        },
        use: {
            options: ['basic', 'error', 'warn', 'success', 'disable'],
            defaultValue: { summary: 'basic' },
            control: { type: 'radio' },
            description: "the type of notification to display based on each situation",
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicInput: Story = {
    args: {
        placeholder: 'Input box',
    },
};

export const WarnInput: Story = {
    args: {
        placeholder: 'Input box',
        use: "warn",
    },
};

export const ErrorInput: Story = {
    args: {
        placeholder: 'Input box',
        use: "error",
    },
};

export const SuccessInput: Story = {
    args: {
        placeholder: 'Input box',
        use: "success",
    },
};


export const DisableInput: Story = {
    args: {
        placeholder: 'Input box',
        use: "disable",
    },
};
