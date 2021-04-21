import React from 'react';

export interface TreeItemProps {
}

interface TreeItemState {
}

export default class TreeItem extends React.Component<TreeItemProps, TreeItemState> {

  constructor(props: TreeItemProps) {
    super(props);
  }
  
  render() {
    return <div>TREE VIEW ITEM</div>;
  }
}