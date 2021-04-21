import React from 'react';

import "./TreeItem.sass";

export interface TreeItemProps {
  label: string;
  isDefaultExpanded?: boolean;
  isDefaultSelected?: boolean;
}

//komponent niekontrolowany
interface TreeItemState {
  isSelected: boolean;
  isExpanded: boolean;
}

export default class TreeItem extends React.Component<TreeItemProps, TreeItemState> {

  constructor(props: TreeItemProps) {
    super(props);

    this.state = {
      isSelected: false,
      isExpanded: false,
    };
  }
  
  componentDidMount() {
    if (this.props.isDefaultExpanded) {
      this.setState({ isExpanded: true });
    }

    if (this.props.isDefaultSelected) {
      this.setState({ isSelected: true });
    }
  }

  render() {
    const {isSelected, isExpanded} = this.state;

    return <React.Fragment>
      <div data-cy="tree-item" data-cy-is-selected={isSelected} className="tree-item" onClick={this.toggleSelect}>
        <div data-cy="expand" className="tree-item-icon-container" onClick={this.toggleExpand}>
          { !isExpanded && this.renderExpandIcon() }
          { isExpanded && this.renderCollapseIcon() }
        </div>
        <div className={`tree-item-label ${ isSelected ? "tree-item-selected" : "" }`}>
          {this.props.label}
        </div>
      </div>
      { isExpanded && <div data-cy='tree-item-children' className="tree-item-children">{this.props.children}</div> }
    </React.Fragment>;
  }

  private renderExpandIcon() {
    return <svg focusable="false" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>;
  }

  private renderCollapseIcon() {
    return <svg focusable="false" viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>;
  }

  private toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  private toggleSelect = () => {
    this.setState({ isSelected: !this.state.isSelected });
  };
}