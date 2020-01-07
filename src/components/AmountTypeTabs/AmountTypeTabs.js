import React, { Component, Fragment } from 'react';

import AmountTypeTab from '../AmountTypeTab/AmountTypeTab';

import theme from './AmountTypeTabs.module.scss';


export class AmountTypeTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: props.children[0].props.label,
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { children } = this.props;
    const { activeTab } = this.state;

    return (
        <Fragment>
          <div className={ theme.amountTabs}>
            { children.map(child => {
              const { label } = child.props;

              return (
                <AmountTypeTab
                  label={ label }
                  key={ label }
                  activeTab={ activeTab }
                  onClick={ this.onClickTabItem }
                />
              )
            }) }
          </div>

          <div className={ theme.amountTabContent }>
            { children.map(child => {
              const { label, children } = child.props;

              if (label !== activeTab) {
                return null;
              }

              return children;
            }) }
          </div>
        </Fragment>
    )
  }
}
