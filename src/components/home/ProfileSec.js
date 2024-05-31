import React, { Component } from 'react';
import ProfileImg from '../../assets/img/pp.jpeg';
import SuggestionsJson from '../../helpers/profileSection.json';

class ProfileSec extends Component {
  state = {
    year: '',
    links: [
      'About',
      'Help',
      'Press',
      'API',
      'Jobs',
      'Privacy',
      'Terms',
      'Location',
      'Language',
    ],
  };

  componentDidMount() {
    const d = new Date();
    const year = d.getFullYear();
    this.setState({ year: year });
  }

  render() {
    const { year } = this.state;

    return (
      <>
        <div className='profile'>
          <div className='left pointer'>
            <img src={ProfileImg} alt='' />
            <div className='name'>
              <p className='fs-14 fw-600'>meinjam</p>
              <p className='text-gray fs-14'>Injamamul Haque</p>
            </div>
          </div>
          <div className='right'>
            <p className='fs-12 fw-600 ins-primary pointer'>Switch</p>
          </div>
        </div>
        <div className='suggestions'>
          <div className='head'>
            <p className='fs-14 text-gray fw-600'>Suggestions For You</p>
            <p className='fs-12 fw-600 pointer'>See All</p>
          </div>
          <div className='lists'>
            {SuggestionsJson?.map((data, i) => (
              <FollowListSingle
                key={i}
                bgColor={data?.color_code}
                name={data?.username}
                follow={data?.followed_by}
              />
            ))}
          </div>
        </div>
        <div className='company-info'>
          <ul>
            {this.state?.links?.map((name, i) => (
              <li key={i}>
                <a href='?#'>{name}</a>
              </li>
            ))}
          </ul>
          <p className='copy fs-12 m-0'>© {year} Instagram from Meta</p>
        </div>
      </>
    );
  }
}

export default ProfileSec;

const FollowListSingle = ({ bgColor, name, follow }) => (
  <div className='single'>
    <div className='left pointer'>
      <div className='img' style={{ background: bgColor }}></div>
      <div className='name'>
        <p className='m-0 fs-14 fw-600'>{name}</p>
        <p className='m-0 fs-12 text-gray'>{follow}</p>
      </div>
    </div>
    <div className='right'>
      <p className='m-0 fs-12 fw-600 ins-primary pointer'>Follow</p>
    </div>
  </div>
);
