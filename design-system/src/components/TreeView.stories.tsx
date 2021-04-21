import { Story } from '@storybook/react/types-6-0';
import TreeView, { TreeViewProps } from "./TreeView";

const stories = {
  title: 'TreeView',
  decorators: [(story: any) => <div style={{ width: '300px', border: '1px solid black' }}>{story()}</div>],
};

export default stories;

const nodes = [{
  id: 'root',
  label: 'Parent',
  children: [
    {
      id: '1',
      label: 'Child - 1',
    },
    {
      id: '2',
      label: 'Child - 2',
      children: [
        {
          id: '3',
          label: 'Child - 3',
        },
      ],
    },
  ],
}];

const Template = (args: TreeViewProps) => <TreeView {...args} />

export const Minimal: Story<TreeViewProps> = Template.bind({});
Minimal.args = {
  nodes,
};

export const DefaultExpanded: Story<TreeViewProps> = Template.bind({});
DefaultExpanded.args = {
  nodes,
  defaultExpanded: ["root", "2"]
} as TreeViewProps;

export const DefaultSelected: Story<TreeViewProps> = Template.bind({});
DefaultSelected.args = {
  nodes,
  defaultExpanded: ["root"],
  defaultSelected: ["1"]
} as TreeViewProps;