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
      <footer className='py-5 bg-dark text-white'>
        <div className="footer-above">
          <div className="container">
            <div className="row" id="contact">
              <div className="footer-col col-md-4 text-left">
                <h3>Location</h3>
                <p>6003 S. 40th St.
                  <br/>Phoenix, AZ 85040
                </p>
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
                ROC#: <a href='https://roc.az.gov/contractor-search?Id=a0Yt000000ACjPFEA1'>322707</a> C-49 <br/>
                ROC#: <a href='https://roc.az.gov/contractor-search?Id=a0Yt000000ACjfoEAD'>322776</a> CR-39 <br/>

                CSLB#: <a href='https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=939445'>939445</a> C38, C20 <br/>
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
