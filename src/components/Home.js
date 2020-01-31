/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
/* eslint no-invalid-this: "warn" */
/* eslint max-len: "warn" */
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Office from '../img/RCC_Office.jpg';

/**
* React Component to Render Lotto Picker home page
* @author [Aron Roberts](https://github.com/robotros)
*/
class Home extends React.Component {
  state = {

  }


  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className = 'Home container'>
      <section id="map" className="section-white">
          <div className="row text-center">
            <div className="col-md-12 ">
            <img className='img-fluid' max-height='500px' src={Office} alt='RCC Offices'></img>
            <br/>
            <br/>
            </div>
          </div>
        </section>
        <section className="section-white" id="about">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="text-capitalize">About</h2>
              <hr/>
            </div>
          </div>
          <div className="row text-center">
            <div className='col-md-2'></div>
            <div className="col-md-4 col-md-offset-2">
                      <p><span className="text-red">R</span>efrigeration <span className="text-black">C</span>ontracting <span className="text-blue">C</span>ompany was started by Bill Valenzuela after leaving California and moving to Arizona. Bill Valenzuela has over 40 years of experience in the commercial refrigeration industry and a reputation of outstanding Customer Service.</p>
                  </div>
                  <div className="col-md-4">
                      <p><span className="text-red">R</span>efrigeration <span className="text-black">C</span>ontracting <span className="text-blue">C</span>ompany looks to continue the reputation of Bill Valenzuela and become a leading contractor in the Phoenix AZ area with the best customer service experience.</p>
                  </div>
                  <div className="col-md-2">
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12 text-center">
                      <hr></hr>
                  </div>
              </div>
        </section>

      </div>
    );
  }
}

export default Home;
