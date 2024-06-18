import home1 from '../../assets/canada.jpg'
import home2 from '../../assets/Mexico-cover.jpg'
import home3 from '../../assets/Rosevelt Island.jpg'
import home4 from '../../assets/logo.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation, Autoplay, Pagination]}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
        >
            <SwiperSlide className='rounded-2xl'>
                <div className="text-center w-full bg-cover bg-center h-80 rounded-2xl" // Set the width and height as per your requirement
                    style={{ backgroundImage: `url(${home1})` }}>
                    
                </div>
            </SwiperSlide>
            <SwiperSlide className='rounded-2xl'>
                <div className="text-center h-80 w-full bg-cover bg-center rounded-2xl" // Set the width and height as per your requirement
                    style={{ backgroundImage: `url(${home2})` }}>
                    {/* md:h-screen md:min-h-screen  */}
                </div>
            </SwiperSlide>
            <SwiperSlide className='rounded-2xl'>
                <div className="text-center h-80 w-full bg-cover bg-center rounded-2xl" // Set the width and height as per your requirement
                    style={{ backgroundImage: `url(${home3})` }}>
                    
                </div>
            </SwiperSlide>
            <SwiperSlide className='rounded-2xl'>
                <div className="text-center h-80 w-full bg-cover bg-center rounded-2xl" // Set the width and height as per your requirement
                    style={{ backgroundImage: `url(${home4})` }}>
                    
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Slider;