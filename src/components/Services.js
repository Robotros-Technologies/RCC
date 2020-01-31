/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
/* eslint no-invalid-this: "warn" */
/* eslint max-len: "warn" */
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Design from '../img/service1.jpg';
import Construction from '../img/RCC_product_case_install.png';
import Service from '../img/RCC_Hill_Bev_Cases.png';

/**
* React Component to Render Lotto Picker home page
* @author [Aron Roberts](https://github.com/robotros)
*/
class Services extends React.Component {
  state = {
    services: [
      {
        'service': 'Refrigeration Design',
        'description': 'At RCC Refrigeration we are able to design a system to meet the unique needs and specifications of any commercial refrigeration project. We work closely with you to design refrigeration & HVAC systems that are highly efficient, effective and sustainable',
        'img': Design,
      },
      {
        'service': 'Refrigeration Construction',
        'description': 'RCC Refrigeration provides the best selection of commercial refrigeration and construction services in the industry.',
        'img': Construction,
      },
      {
        'service': 'Refrigeration Maintenance',
        'description': 'RCC Refrigeration offers preventative maintenance programs designed to provide our customers with a well-planned approach to all inustrial and commercial refrigeration maintenance and repair.',
        'img': Service,
      },
    ],

  }


  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className = 'Home container'>
        <section className="section-white" id="services">
        <h2>Services</h2>
        <hr/>
        <div className='row'>
          {this.state.services.map((service) =>
            <div key={service.service} className='col-md-4'>
              <h3>{service.service}</h3>
              <img src={service.img} alt={service.service} className='img-fluid'/>
              <br/><br/>
              <p>{service.description}</p>
              <hr/>

            </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
