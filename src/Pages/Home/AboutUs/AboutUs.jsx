import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img1 from '../../../assets/Company logo/1.png'
import img2 from '../../../assets/Company logo/2.png'
import img3 from '../../../assets/Company logo/3.png'
import img4 from '../../../assets/Company logo/4.png'
import img5 from '../../../assets/Company logo/5.png'
const AboutUs = () => {


    return (
        <div>
            <section className="text-center mt-8">
                <h2 className="text-4xl font-bold mt-8 uppercase">available All Brand </h2>
                <p className="text-xl font-normal mt-3">Explore Top Brands</p>
            </section>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-8">
              
                         <SwiperSlide>

                            <img className='mx-auto ' src={img1} alt="" />

                        </SwiperSlide>
                        <SwiperSlide>

                            <img className='mx-auto' src={img2} alt="" />

                        </SwiperSlide>
                        <SwiperSlide>

                            <img className='mx-auto ' src={img3} alt="" />

                        </SwiperSlide>
                        <SwiperSlide>

                            <img  className='mx-auto ' src={img4} alt="" />

                        </SwiperSlide>
                        <SwiperSlide>

                            <img  className='mx-auto ' src={img5} alt="" />

                        </SwiperSlide>
                  

                </Swiper>
            </div>
        </div>
    );
};

export default AboutUs;