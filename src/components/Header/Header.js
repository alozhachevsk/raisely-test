import React from 'react';

import theme from './Header.module.scss';

export const Header = () => (
    <header className={ theme.root }>
      <div className="container">
        <div className={ theme.logo }>
          Campaign Name
        </div>
      </div>
    </header>
);
