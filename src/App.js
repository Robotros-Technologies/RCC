/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
/* eslint no-invalid-this: "warn" */
/* eslint max-len: "warn" */

/**
* filename: App.js
* Main component to render RCC Webpage
*
* Author:[Aron Roberts](github.com/robotros)
* Last Update: 1/28/2020
*/
import React from 'react';
import {Route} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';
import {faDice} from '@fortawesome/free-solid-svg-icons';
import {faChartBar} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faHistory} from '@fortawesome/free-solid-svg-icons';
import Head from './components/Head';
import Foot from './components/Foot';
import Home from './components/Home';
import Logo from './img/RCC_Logo.png';
import './css/app.css';

// font awesome icon library
library.add(faCopyright);

/**
* React Component to Render WMPQ.org Website
* @author [Aron Roberts](https://github.com/robotros)
*/
class RCCApp extends React.Component {
  state = {
    company: 'RCC Refrigeration, Inc.',
    site: 'RCC Refrigeration',
    Nav: [
      {
        'path': '/',
        'label': 'Home',
        'component': Home,
      },
    ],
    social: [
      {'url': 'https://www.facebook.com/robotrostech'},
      // {'url': 'https://www.youtube.com/channel/UCgXsCoR3OWw7IE6UL_NWJYQ'},
      {'url': 'https://www.linkedin.com/company/refrigerationcontractingcompany'},
      // {'url': 'emailto:a.roberts@robotros.tech'},
    ],
    credentials:
    {
      username: '',
      password: '',
    },
  }

  /**
  * Make API call to get User information from ERP
  * @param {HTMLElement} event login form
  */
  login = async (event) =>{
    event.preventDefault();
    let user = event.target[0].value;
    let pass = event.target[1].value;
    let test = false;

   test ?
    await this.setState({credentials: {username: user.toUpperCase(),
      password: pass}}, document.getElementById('closeLogin').click()) :
    console.error('Authenticaion Failed');
  };

  /**
  * SetState credentials to ''
  * @param {HTMLElement} event logout button
  */
  logout = async (event) => {
    event.preventDefault();
    await this.setState({credentials: {username: '', password: ''}});
    console.warn('user logged out');
  }

  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <main className='app'>
        <Head
          site={this.state.site}
          logo={Logo}
          Nav={this.state.Nav}
          credentials = {this.state.credentials}
          login={this.login}
          logout={this.logout}
        />
        <div className='center'>
          {this.state.Nav.map((page) =>
            <Route
              key={page.label}
              exact path={page.path}
              component={page.component}
            />
          )}
        </div>
        <Foot
          social={this.state.social}
          company = {this.state.company}
        />
      </main>
    );
  }
}

export default RCCApp;
