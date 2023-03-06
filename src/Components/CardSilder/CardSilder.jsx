import React from "react";
import "./style.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Pagination } from "swiper";




export const CardSilder = ({courses} ) => {
    // console.log(courses);

    return (<>
                <Swiper
                    // loop={true}
                    // slidesPerView={1}
                    // spaceBetween={12}
                    freeMode={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // responsive={responsive}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                

                    
                    
                    <SwiperSlide>
                        <div className='card-silder-list'>
                            <div>
                                <img className='w-full card-silder-img' src={`./courses/${courses.coverImage}`} alt={courses.title} />
                            </div>

                            <div className='p-5 mr-10'>
                                <div className=' flex justify-start items-center'>
                                    <h6 className='card-silder-metadata'>{`${courses.time} | ${courses.lessons} Lessons`}</h6>
                                    <div className='ml-2 px-1 flex justify-center items-center card-silder-ratting '>
                                        <img src="./icons/star.svg" alt="ratting" />

                                        <p className='ml-2 text-white'>
                                        {courses.ratting}
                                        </p>

                                    </div>
                                </div>

                                <div className='text-start card-title'>
                                {courses.title}
                                </div>

                                <div className='text-start'>
                                    <span className='card-discount-price'>{`₹ ${courses.prices.discountPrice}/-`}</span> <span className='line-through card-regular-price'>{`₹ ${courses.prices.regularPrice}/-`}</span>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
            
        </>
    );
}
