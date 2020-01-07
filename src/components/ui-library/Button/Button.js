import React from 'react';
import classNames from 'classnames';

import theme from './Button.module.scss';

export const Button = props => {
  const { label, fullWidth, disabled } = props;

  return (
      <button
        className={ classNames({
          [ theme.fullWidth ]: fullWidth,
          [ theme.disabled ]: disabled,
        }, theme.root)  }
        disabled={ disabled }
      >
        { label }
      </button>
  )
};
