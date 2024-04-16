import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img1 from '../../../assets/Reviwes/Man1.png'
import img2 from '../../../assets/Reviwes/Man2.png'
import img3 from '../../../assets/Reviwes/Man3.png'
const Reviwes = () => {
    return (
        <div>
            <section className=' mt-8 text-center'>
                <h2 className='text-4xl font-bold mt-8 uppercase text-center'>our happy Buyer</h2>
            </section>

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-8">

                    <SwiperSlide>

                        <img className='mx-auto ' src={img1} alt="" />
                        <div className='text-center'>
                            <h2 className='text-2xl font-medium'>Sarah Janes</h2>
                            <p className='text-xl font-medium'>Comfy and Stylish! A Must-Have!</p>
                            <p className='text-sm font-medium'>Absolutely love my new shoes from this store! Theyre incredibly comfortable and the design is so stylish. Definitely my new go-to pair for everyday wear.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <img className='mx-auto' src={img2} alt="" />
                        <div className='text-center'>
                            <h2 className='text-2xl font-medium'>Sarah Janes</h2>
                            <p className='text-xl font-medium'>Comfy and Stylish! A Must-Have!</p>
                            <p className='text-sm font-medium'>Absolutely love my new shoes from this store! Theyre incredibly comfortable and the design is so stylish. Definitely my new go-to pair for everyday wear.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <img className='mx-auto ' src={img3} alt="" />
                        <div className='text-center'>
                            <h2 className='text-2xl font-medium'>Sarah Janes</h2>
                            <p className='text-xl font-medium'>Comfy and Stylish! A Must-Have!</p>
                            <p className='text-sm font-medium'>Absolutely love my new shoes from this store! Theyre incredibly comfortable and the design is so stylish. Definitely my new go-to pair for everyday wear.</p>
                        </div>
                    </SwiperSlide>



                </Swiper>
            </div>
        </div>
    );
};

export default Reviwes;