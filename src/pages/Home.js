import React, { Component } from 'react';
import PostSec from '../components/home/PostSec';
import ProfileSec from '../components/home/ProfileSec';

class Home extends Component {
  render() {
    return (
      <section className='homepage'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'>
              <div className='main-sec'>
                <PostSec />
              </div>
            </div>
            <div className='col-md-5'>
              <div className='profile-sec'>
                <ProfileSec />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
