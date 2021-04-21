import React from 'react';
import TreeItem from './TreeItem';

interface TreeViewNode {
  id: string;
  label: string;
  children?: TreeViewNode[];
}

export interface TreeViewProps {
  nodes: TreeViewNode[];
  defaultExpanded?: string[];
  defaultSelected?: string[];
}

export default class TreeView extends React.Component<TreeViewProps> {
  
  render() {
    const {nodes} = this.props;

    return <React.Fragment>
      {nodes.map(n => this.renderTree(n))}
    </React.Fragment>;
  }

  private renderTree(node: TreeViewNode) {
    const {defaultExpanded, defaultSelected} = this.props;

    return <TreeItem key={node.id} label={node.label} isDefaultExpanded={!!defaultExpanded?.includes(node.id)} isDefaultSelected={!!defaultSelected?.includes(node.id)}>
      {node.children?.map(n => this.renderTree(n))}
    </TreeItem>
  }
}