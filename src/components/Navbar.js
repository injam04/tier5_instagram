import React, { Component } from 'react';
import MainLogo from '../assets/img/navbar/Instagram-Logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav class='navbar fixed-top navbar-light bg-white'>
        <div class='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='main-nav'>
                <a class='navbar-brand' href='#?'>
                  <img src={MainLogo} alt='' className='img-fluid' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
