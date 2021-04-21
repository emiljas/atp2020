import { Meta, Story } from "@storybook/react";
import TreeItem, { TreeItemProps } from "./TreeItem";

const stories: Meta<TreeItemProps> = {
  title: "TreeItem",
  argTypes: {
    label: {
      description: "The label of the tree item",
      type: {
        required: true,
      },
    },
    isDefaultExpanded: {
      description: "If true, the tree item is expanded by default",
      type: "boolean",
      defaultValue: false,
      table: {
        defaultValue: {
          summary: "false"
        }
      },
    },
    isDefaultSelected: {
      description: "If true, the tree item is selected by default",
      type: "boolean",
      defaultValue: false,
      table: {
        defaultValue: {
          summary: "false"
        }
      },
    },
  },
};

export default stories;

const Template = (props: TreeItemProps) => <TreeItem {...props} />;

export const Minimal: Story<TreeItemProps> = Template.bind({});
Minimal.args = {
  label: "tree item",
};

export const DefaultExpanded: Story<TreeItemProps> = Template.bind({});
DefaultExpanded.args = {
  label: "tree item",
  isDefaultExpanded: true,
};

export const DefaultSelected: Story<TreeItemProps> = Template.bind({});
DefaultSelected.args = {
  label: "tree item",
  isDefaultSelected: true,
};