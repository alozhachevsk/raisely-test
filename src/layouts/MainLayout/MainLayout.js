import React, {Fragment} from 'react';

import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { DonationForm } from '../../components/DonationForm/DonationForm';

import theme from './MainLayout.module.scss';


function MainLayout() {
  return (
      <Fragment>
        <div className={ theme.root }>
          <Header />

          <section className={ theme.mainContent }>
            <div className={ theme.container }>
              <div className={ theme.header }>
                <h1>Campaign Name</h1>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis, eaque eveniet</div>
              </div>
              <DonationForm />
            </div>
          </section>
        </div>

        <Footer />
      </Fragment>
  )
}

export default MainLayout;
