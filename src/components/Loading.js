import React, { Component } from 'react';
import Logo from '../assets/img/loading-icon.png';
import MetaLogo from '../assets/img/Instagram-Meta.png';

class Loading extends Component {
  render() {
    return (
      <div className='main-loading'>
        <img src={Logo} alt='' className='main-logo' />
        <div className='bottom'>
          <p className='fs-14 fw-600 text-gray m-0 text-center'>from</p>
          <img src={MetaLogo} alt='' />
        </div>
      </div>
    );
  }
}

export default Loading;
