/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
/* eslint no-invalid-this: "warn" */
/* eslint max-len: "warn" */
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
        <section className="section-white" id="about">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="text-capitalize">About</h2>
              <hr/>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 col-md-offset-2">
                      <p><span className="text-red">R</span>efrigeration <span className="text-black">C</span>ontracting <span className="blue">C</span>ompany was started by Bill Valenzuela after leaving California and moving to Arizona. Bill Valenzuela has over 40 years of experience in the commercial refrigeration industry and a reputation of outstanding Customer Service.</p>
                  </div>
                  <div className="col-md-4">
                      <p><span className="red">R</span>efrigeration <span className="black">C</span>ontracting <span className="blue">C</span>ompany looks to continue the reputation of Bill Valenzuela and become a leading contractor in the Phoenix AZ area with the best customer service experience.</p>
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
        <section id="map" className="section-white">
          <div className="row text-center">
            <div className="col-md-12 ">
              <iframe className="img-responsive google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.1952259400887!2d-111.99634228430682!3d33.39207058079061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0f7480646c07%3A0x76a1d1df6fbcc9f2!2s6003+S+40th+St%2C+Phoenix%2C+AZ+85042!5e0!3m2!1sen!2sus!4v1494484179259" allowfullscreen></iframe>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
