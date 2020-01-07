import React, { Component } from 'react';
import classNames from 'classnames';

import { AmountTypeTabs } from '../AmountTypeTabs/AmountTypeTabs';
import { Button } from '../ui-library/Button/Button';
import InputNumber from '../ui-library/InputNumber/InputNumber';
import { amountDonateTypes } from '../utils/amountDonateTypes';

import theme from './DonationForm.module.scss';


export class DonationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeAmountButtonIdx: '',
      inputValue: '',
    }
  }

  onClickAmountButton = idx => {
    this.input.clearValue();

    this.setState({
      activeAmountButtonIdx: idx,
      inputValue: '',
    });
  };

  onChangeInput = amount => {
    this.setState({
      activeAmountButtonIdx: '',
      inputValue: amount,
    });
  };

  render() {
    const { activeAmountButtonIdx, inputValue } = this.state;

    return (
        <div className={ theme.root }>
          <AmountTypeTabs>
            { Object.entries(amountDonateTypes).map(([key, value]) => (
              <div label={ value.label } key={ key }>
                { value.amounts.map((amount, idx) => (
                  <button
                    className={ classNames({
                      [theme.active]: activeAmountButtonIdx === idx,
                    }, theme.amountButton) }
                    onClick={ () => this.onClickAmountButton(idx) }
                    key={ `${ value.label }${ amount }` }
                  >
                    { `${ amount }$` }
                  </button>
                )) }
              </div>
            )) }
          </AmountTypeTabs>

          <p>Or enter another amount ($)</p>

          <InputNumber
            className={ theme.amountInput }
            ref={ input => this.input = input }
            type="number"
            placeholder="Other"
            min={ 1 }
            onChange={ this.onChangeInput }
          />

          <Button
            label="Next"
            disabled={ activeAmountButtonIdx === '' && inputValue < 1 }
            fullWidth
          />
        </div>
    )
  }
}
