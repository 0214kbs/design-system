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
    args: {},
};

export const BasicHasTextCheckbox: Story = {
    args: {
        text: "텍스트 있는 체크박스 ",
    },
};
export const BigTextCheckbox: Story = {
    args: {
        text: "사이즈가 큰 체크박스",
        size: "30px"
    },
};
export const LinethroughCheckbox: Story = {
    args: {
        text: "체크박스 체크시 글자 중간에 선",
        islinethrough: true,
    },
};


