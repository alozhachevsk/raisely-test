import React, { Component } from 'react';
import classNames from 'classnames';

import theme from './InputNumber.module.scss';

export default class InputNumber extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' }
  }

  onChange = event => {
    const { onChange } = this.props;

    this.setState({ value: event.target.value });
    onChange(event.target.value);
  };

  clearValue = () => {
    this.setState({ value: '' });
  };

  render() {
    const { type, placeholder, min, className } = this.props;

    return (
      <input
        className={ classNames({
          [theme.number]: type === 'number',
        }, theme.input, className) }
        type={ type }
        value={ this.state.value }
        placeholder={ placeholder }
        min={ min }
        onChange={ this.onChange }
      />
    )
  }
};
