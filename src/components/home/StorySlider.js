import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

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
        <SwiperSlide>
          <SingleStory img_id='65c952' name='sk.ni..' />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory img_id='56h786' name='sarjok..' />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory img_id='07g634' name='_s_i_a..' />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory img_id='65c952' name='sk.ni..' />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory img_id='56h786' name='sarjok..' />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory img_id='07g634' name='_s_i_a..' />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory img_id='65c952' name='sk.ni..' />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory img_id='56h786' name='sarjok..' />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory img_id='07g634' name='_s_i_a..' />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory img_id='65c952' name='sk.ni..' />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory img_id='56h786' name='sarjok..' />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory img_id='07g634' name='_s_i_a..' />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory img_id='65c952' name='sk.ni..' />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory img_id='56h786' name='sarjok..' />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory img_id='07g634' name='_s_i_a..' />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory img_id='65c952' name='sk.ni..' />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory img_id='56h786' name='sarjok..' />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory img_id='07g634' name='_s_i_a..' />
        </SwiperSlide>
      </Swiper>
    );
  }
}

export default StorySlider;

const SingleStory = ({ img_id, name }) => (
  <div className='single'>
    <img src={'https://via.placeholder.com/600/' + img_id} alt='' />
    <p className='name'>{name}</p>
  </div>
);
