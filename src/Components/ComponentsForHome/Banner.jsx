// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {

    // 
    // 
    // 
    // https://i.ibb.co/ZLcxnK0/150246.jpg
    // https://i.ibb.co/CMC0jgr/2150790340.jpg
    // https://i.ibb.co/cDx0Q5j/modern-residential-district-with-green-roof-balcony-generated-by-ai.jpg
    // https://i.ibb.co/vHNyGND/night-architecture-outdoors-dusk-building-exterior-tree-grass-illuminated-generative-ai.jpg
    // https://i.ibb.co/wKHJ3F5/3d-electric-car-building.jpg

    return (
        <div className=''>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide
                    className='bg-no-repeat bg-cover rounded-3xl' style={{ backgroundImage: 'url(https://i.ibb.co/JnkxF6t/outdoor-swimming-pool.jpg)' }}>
                    <div className='flex justify-center items-center h-[calc(100vh-40vh)] text-red-50 bg-black opacity-70 rounded-3xl'>
                        <div className='rounded-3xl text-center'>
                            <h1>The Best Way To</h1>
                            <h1 className='text-5xl font-semibold text-orange-600'> Find Your Dream Home</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className='bg-no-repeat bg-cover rounded-3xl' style={{ backgroundImage: 'url(https://i.ibb.co/YycNV4j/luxury-water-swimming-resort-hotel.jpg)' }}>
                    <div className='flex justify-center items-center h-[calc(100vh-40vh)] text-red-50 bg-black opacity-70 rounded-3xl'>
                        <div className=''>
                            <h1 className='text-5xl'> Hello-1 </h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className='bg-no-repeat bg-cover rounded-3xl' style={{ backgroundImage: 'url(https://i.ibb.co/9wQY2wR/2150799629.jpg)' }}>
                    <div className='flex justify-center items-center h-[calc(100vh-40vh)] text-red-50 bg-black opacity-70 rounded-3xl'>
                        <div className=''>
                            <h1 className='text-5xl'> Hello-1 </h1>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;