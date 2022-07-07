import React, { Component } from 'react';
import ProfileImg from '../../assets/img/pp.jpeg';

class ProfileSec extends Component {
  state = {
    year: '',
  };

  componentDidMount() {
    const d = new Date();
    const year = d.getFullYear();
    // console.log(year);
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
            <FollowListSingle
              img_id='07g634'
              name='md.nahid12'
              follow='Followed by lonley_sagor + 6 more'
            />
            <FollowListSingle
              img_id='98u765'
              name='sar.jokar'
              follow='Followed by md.nahid12 + 1 more'
            />
            <FollowListSingle
              img_id='35g678'
              name='islamicechotv'
              follow='Popular'
            />
            <FollowListSingle
              img_id='09j657'
              name='me.alo1155'
              follow='You like this Page on Facebook'
            />
            <FollowListSingle
              img_id='67h890'
              name='sk.nizamu'
              follow='Followed by meinjam + 16 more'
            />
          </div>
        </div>
        <div className='company-info'>
          <ul>
            <li>
              <a href='?#'>About</a>
            </li>
            <li>
              <a href='?#'>Help</a>
            </li>
            <li>
              <a href='?#'>Press</a>
            </li>
            <li>
              <a href='?#'>API</a>
            </li>
            <li>
              <a href='?#'>Jobs</a>
            </li>
            <li>
              <a href='?#'>Privacy</a>
            </li>
            <li>
              <a href='?#'>Terms</a>
            </li>
            <li>
              <a href='?#'>Location</a>
            </li>
            <li>
              <a href='?#' className='last'>
                Language
              </a>
            </li>
          </ul>
          <p className='copy fs-12 m-0'>© {year} Instagram from Meta</p>
        </div>
      </>
    );
  }
}

export default ProfileSec;

const FollowListSingle = ({ img_id, name, follow }) => (
  <div className='single'>
    <div className='left pointer'>
      <img
        src={`https://via.placeholder.com/600/${img_id}`}
        alt=''
        className='img-fluid'
      />
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
