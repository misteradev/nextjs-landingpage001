import React from 'react'
import Head from 'next/head'
import Hero2 from '@/components/Hero2'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

type Props = {
   
}

// data import
import { Contents } from '../data/content'

export const { ourclients } = Contents;
export const { systemimg } = Contents;
export const { pixelgrade } = Contents;
export const { helping } = Contents;

export default function index({ }: Props) {
   return (
      <>
         <Head>
            <title>หน้าแรก | Homepage</title>
            <meta name='หน้าแรก' content='หน้าแรกของฉัน' />
         </Head>
         <section>
            <Hero2 />
            <div>
               <div className='pt-10 container mx-auto'>
                  {/* Section-1 */}
                  <div className='text-center'>
                     <h3 className='text-4xl text-gray-700 font-semibold'>{ourclients.title}</h3>
                     <p className='text-gray-600'>{ourclients.desc}</p>
                     <div className='flex justify-between pt-10'>
                        {ourclients.icon.map((item, i) => (
                           <div key={i}>
                              <Image src={item.img} alt='icon' />
                           </div>
                        ))}
                     </div>
                  </div>
                  {/* Section-2 */}
                  <div className='pt-10 text-center'>
                     <div>
                        <h3 className='text-4xl text-gray-700 font-semibold'>
                           <span>Manage your entire community</span>
                           <br />
                           <span>in a single system</span>
                        </h3>
                        <p className='text-gray-600'>Who is Nextcent suitable for?</p>
                     </div>
                     <div className='pt-6 md:flex gap-8'>
                        {systemimg.membership.map((item, i) => (
                           <div key={i} 
                           className='text-gray-600 md:shadow-md p-4 mb-6'
                           >
                              <Image className='w-10 mx-auto pb-2' src={item.icon} alt={item.title}/>
                              <h3 className='text-3xl font-semibold px-2'>{item.title}</h3>
                              <p className='text-sm'>{item.desc}</p>
                           </div>
                        ))}
                     </div>
                  </div>
                  {/* Section-3 */}
                  <div className='grid md:grid-cols-2 items-center text-center md:text-left'>
                     <div>
                        <Image className='mx-auto w-50' src={pixelgrade.image1} alt='pic004'/>
                     </div>
                     <div className='text-gray-600'>
                        <div className='text-center md:text-left'>
                           <h3 className='text-4xl font-semibold'>{pixelgrade.title}</h3>
                           <p className='my-4 text-sm'>{pixelgrade.desc}</p>                         
                        </div>
                        <button className='bg-green-500 py-2 px-4 rounded-md text-white'>
                           <Link href="/">Learn More</Link>
                        </button>
                     </div>
                  </div>
               </div>
               {/* Section-4 */}
               <div className='mt-4 py-24 bg-gray-200 shadow-sm'>
                  <div className='container mx-auto grid md:grid-cols-2 items-center text-center md:text-left'>
                     <div className='text-gray-600'>
                        <h3 className='text-3xl font-semibold'>{helping.title1}</h3>
                        <h3 className='text-3xl font-semibold text-green-500'>{helping.title2}</h3>
                        <p className='text-sm pt-2'>{helping.desc}</p>
                     </div>
                     <div className='grid md:grid-cols-2 gap-2 text-gray-600'>
                        {helping.member.map((item, i) => (
                           <div key={i} className='md:flex gap-2 md:py-4'>
                              <div>
                                 <Image className='mx-auto' src={item.img} alt='icons'/>
                              </div>
                              <div>
                                 <h4 className='text-2xl font-semibold'>{item.number}</h4>
                                 <p className='text-sm'>{item.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               {/* Section-5 */}
               <div className='mt-10'>
                  <div className='container mx-auto grid md:grid-cols-2 items-center text-center md:text-left'>
                     <div>
                        <Image className='mx-auto' src={Contents.design.image} alt={Contents.design.title}/>
                     </div>
                     <div className='text-gray-600 mt-4'>
                        <div className='text-center md:text-left'>
                           <h3 className='text-4xl font-semibold'>{Contents.design.title}</h3>
                           <p className='my-4 text-sm'>{Contents.design.desc}</p>
                        </div>
                        <button className='bg-green-500 py-2 px-4 rounded-md text-white'>
                           <Link href="/">Learn More</Link>
                        </button>
                     </div>
                  </div>
               </div>
               {/* Section-6 */}
               <div className='mt-4 py-14 bg-gray-200 shadow-sm'>
                  <div className='container mx-auto grid md:grid-cols-3 items-center text-center md:text-left'>
                     <div>
                        <Image className='mx-auto' src={Contents.timSmith.image} alt="timsmith"/>
                     </div>
                     <div className='md:col-span-2'>
                        <p className='text-gray-800 text-sm'>
                           {Contents.timSmith.text1}
                        </p>
                        <h4 className='font-semibold text-lg text-green-600 py-2'>
                           {Contents.timSmith.text2}
                        </h4>
                        <p className='text-gray-600 text-sm'>
                           {Contents.timSmith.text3}
                        </p>
                        <div className='grid md:grid-cols-3 items-center pt-4'>
                           <div className='flex md:col-span-2 gap-4'>
                              {Contents.timSmith.icons.map((item, i) => (
                                 <div key={i}
                                 className='mx-auto'
                                 >
                                    <Image src={item.icon} alt="pic001"/>
                                 </div>
                              ))}
                           </div>
                           <Link href="/"
                           className='flex gap-4 text-green-600 font-semibold justify-center pt-4 md:pt-0'
                           >
                              <p className='hover:underline underline-offset-4'>Meet all customers</p>
                              <HiOutlineArrowNarrowRight className='text-2xl'/>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               {/* Section-7 */}
               <div className='mt-12'>
                  <div className='container mx-auto'>
                     <div className='text-center text-gray-600'>
                        <h3 className='text-4xl font-semibold'>
                           {Contents.marketing.title}
                        </h3>
                        <p className='lg:px-60 py-2 lg:py-4'>{Contents.marketing.desc}</p>
                     </div>
                     <div className='lg:flex lg:gap-8 text-center'>
                        {Contents.marketing.feature.map((item, i) => (
                           <div key={i}
                           className='bg-gray-200 p-6 rounded-lg lg:mt-40 sm:mt-4 shadow-sm'
                           >
                              <p className='text-gray-500 font-semibold text-xl'>{item.desc}</p>
                              <div className='flex justify-center items-center gap-4 py-4 text-lg text-green-600 font-semibold'>
                                 <span>{item.read}</span>
                                 <span>{item.icon}</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               {/* Section-8 */}
               <div className='mt-20 bg-gray-200 py-32'>
                  <div className='container mx-auto text-center lg:px-96'>
                     <h4 className='text-6xl font-semibold text-gray-500'>{Contents.suscipit.title}</h4>
                  </div>
                  <div>
                     <button className='flex justify-center items-center gap-4 text-center mx-auto bg-green-500 text-white text-xl py-3 px-4 rounded-lg mt-4'>
                        {Contents.suscipit.button}
                        {Contents.suscipit.icon}
                     </button>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}