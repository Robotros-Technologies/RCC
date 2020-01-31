/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
/* eslint no-invalid-this: "warn" */
/* eslint max-len: "warn" */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SocialIcon} from 'react-social-icons';

/**
* React Component to Render footer
* @author [Aron Roberts](https://github.com/robotros)
*/
class Foot extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <footer className='py-5 bg-dark1 text-white'>
        <div className="footer-above">
          <div className="container">
            <div className="row" id="contact">
              <div className="footer-col col-md-4 text-left">
                <h3>Location</h3>
                <p>6003 S. 40th St.
                  <br/>Phoenix, AZ 85040
                </p>
                <iframe title='map' max-width='300px' className="img-responsive google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.1952259400887!2d-111.99634228430682!3d33.39207058079061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0f7480646c07%3A0x76a1d1df6fbcc9f2!2s6003+S+40th+St%2C+Phoenix%2C+AZ+85042!5e0!3m2!1sen!2sus!4v1494484179259" allowFullScreen></iframe>
              </div>
              <div className="footer-col col-md-4 text-center">
                <h3>Around the Web</h3>
                <ul className="list-inline text-center">
                  <li>
                    {this.props.social.map((S) =>
                      <SocialIcon
                        key={S.url}
                        url={S.url}
                      />
                    )}
                  </li>
                </ul>
              </div>
              <div className="footer-col col-md-4 text-right">
                <h3>Phone</h3>
                <p> Toll Free : 855-852-4555 <br/>
                    Office: 855-852-4555 <br/>
                    Fax: 602-900-5064 <br/>
                </p>
                <hr/>
                <p>
                C-49 ROC#: <a href='https://roc.az.gov/contractor-search?Id=a0Yt000000ACjPFEA1'>322707</a><br/>
                 CR-39 ROC#: <a href='https://roc.az.gov/contractor-search?Id=a0Yt000000ACjfoEAD'>322776</a><br/>
                 C38, C20 CSLB#: <a href='https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=939445'>939445</a><br/>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-below">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
              <hr/>
                <p className='m-0 text-center text-white'>
                Copyright <FontAwesomeIcon icon='copyright' />
                  {new Date().getFullYear()} {this.props.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Foot.propTypes = {
  social: PropTypes.array.isRequired,
  company: PropTypes.string.isRequired,
};

export default Foot;
