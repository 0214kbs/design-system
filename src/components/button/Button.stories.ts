import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "버튼 크기 선택",
    },
    label: {
      description: "버튼 컴포넌트 안에 표시되는 문자",
    },
    color: {
      description: "글자색 설정",
    },
    bgcolor: {
      description: "배경색 설정",
    },
    use: {
      options: ["basic", "error", "warn", "disable", "secondary"],
      control: { type: "radio" },
      description: "각 상황에 따라 표시할 버튼 유형",
    },
    onClick: {
      description: "버튼 클릭 시 실행되는 이벤트",
    },
    type: {
      description: "버튼의 동작 유형 선택",
    },
  },
  args: {
    bgcolor: "#2938ff",
    color: "white",
    use: "basic",
    size: "medium",
    label: "Button",
    type: "button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryBlueButton: Story = {
  args: {},
};

export const SecondaryBlueButton: Story = {
  args: {
    use: "secondary",
  },
};

export const WarnButton: Story = {
  args: {
    use: "warn",
  },
};

export const ErrorButton: Story = {
  args: {
    use: "error",
  },
};

export const DisableButton: Story = {
  args: {
    use: "disable",
  },
};
