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
        name: {
            description: "input요소의 값 정의",
        },
        value: {
            description: "선택된 값이나 사용자가 입력한 값 선택"
        },
        text: {
            description: "체크박스 옆에 표시되는 텍스트",
        },
        size: {
            description: "크기 설정 ( 체크박스크기: size, 글자 크기 : size-3)",
        },
        islinethrough: {
            description: "글자 중간에 선 긋기 여부 선택",
        },
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


