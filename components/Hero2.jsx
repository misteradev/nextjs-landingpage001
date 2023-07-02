import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import { Contents } from '../data/content'
import Link from "next/link";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from "swiper";

export const { heroimage } = Contents;

const Hero2 = () => {
   return (
      <>
         <section className="bg-gray-200">
            <div className="container mx-auto">
               <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                     clickable: true,
                  }}
                  modules={[Pagination]}
                  style={{
                     "--swiper-pagination-color": "#4CAF4F",
                  }}
               >
                  <SwiperSlide className="py-[96px]">
                     <div className="grid md:grid-cols-2 items-center">
                        <div className="items-center pb-4 text-center md:text-left">
                           <h4 className="text-5xl font-semibold">
                              <span className="text-gray-600">Lessons and insights</span>
                              <br />
                              <span className="text-green-600">from 8 years</span>
                           </h4>
                           <p className="py-4 text-gray-600">Where to grow your business as a photographer: site or social media?</p>
                           <button className='bg-green-500 py-2 px-4 rounded-md text-white'><Link href="/sign-up">Register</Link>
                           </button>
                        </div>
                        <div className="mx-auto">
                           <Image src={heroimage.heroimg2} alt="hero1" priority/>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide className="py-[96px]">
                     <div className="grid md:grid-cols-2 items-center">
                        <div className="mx-auto">
                           <Image src={heroimage.heroimg2} alt="hero2" priority/>
                        </div>
                        <div className="items-center pb-4 text-center md:text-left">
                           <h4 className="text-5xl font-semibold">
                              <span className="text-gray-600">Lessons and insights</span>
                              <br />
                              <span className="text-green-600">from 8 years</span>
                           </h4>
                           <p className="py-4 text-gray-600">Where to grow your business as a photographer: site or social media?</p>
                           <button className='bg-green-500 py-2 px-4 rounded-md text-white'><Link href="/sign-up">Register</Link>
                           </button>
                        </div>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>
         </section>
      </>
   )
}

export default Hero2