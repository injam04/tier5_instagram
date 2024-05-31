import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Stories from '../../helpers/Stories.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

class StorySlider extends Component {
  render() {
    return (
      <Swiper
        spaceBetween={10}
        slidesPerView={7}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation
        modules={[Navigation]}
        slidesPerGroup={4}
      >
        {Stories?.map((story, i) => (
          <SwiperSlide key={i}>
            <SingleStory bgColor={story?.bgColor} name={story?.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
}

export default StorySlider;

const SingleStory = ({ bgColor, name }) => (
  <div className='single'>
    <div className='img'>
      <div className='child' style={{ background: bgColor }}></div>
    </div>
    <p className='name'>{name}</p>
  </div>
);
