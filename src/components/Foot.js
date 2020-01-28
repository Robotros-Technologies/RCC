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
              <div className="footer-col col-md-4">
                <h3>Location</h3>
                  <p>6003 S. 40th St.
                  <br/>Phoenix, AZ 85040</p>
              </div>
              <div className="footer-col col-md-4">
                <h3>Around the Web</h3>
                  <ul className="list-inline">
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
                        <div class="footer-col col-md-4">
                        <h3>Phone</h3>
                        <p> Toll Free : 855-852-4555 <br/>

                          ROC#: <a href="http://www.azroc.gov/forms/details.asp?license=311790">311790</a> C-49</p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-below">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                                <p className='m-0 text-center text-white'>
                Copyright <FontAwesomeIcon icon='copyright' />
                {new Date().getFullYear()} {this.props.company}
              </p>
                        </div>
                    </div>
                </div>
            </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>

            </div>
            <div className='col-md-6'>

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
