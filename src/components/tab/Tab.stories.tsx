import type { Meta, StoryObj } from "@storybook/react";
import Tab from "./Tab"
const meta = {
    title: "Components/Tab",
    component: Tab,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        tabs: {
            description: "tab menu 목록",
        },
        tabcontents: {
            description: "각 tab의 내용",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTab: Story = {
    args: {
        tabs: ["tab1", "tab2", "tab3"],
        tabcontents: ["tab1 contents", "tab2 contents", "tab3 contents"],
    },
};
