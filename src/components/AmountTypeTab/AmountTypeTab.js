import React, { Component } from 'react';
import classNames from 'classnames';

import theme from './AmountTypeTab.module.scss';


export default class AmountTypeTab extends Component {
  onClick = () => {
    const { label, onClick } = this.props;

    onClick(label);
  };

  render() {
    const { label, activeTab } = this.props;

    return (
        <button
          className={ classNames({
            [theme.active]: activeTab === label,
          }, theme.root) }
          onClick={ this.onClick }
        >
          { label }
        </button>
    )
  }
}
