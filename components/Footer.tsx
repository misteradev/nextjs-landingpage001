import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaTelegramPlane } from "react-icons/fa";

// Import data
import { Contents } from '../data/content'

export const { footer } = Contents;

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='py-10 bg-gray-700'>
        <div className='container mx-auto'>
            <div className='md:flex md:justify-between text-white items-center text-center md:text-left'>
                <div>
                    <div className='md:flex md:gap-2'>
                        <Image className='inline-block' src={footer.piclogo} alt='logo1'/>
                        <h3 className='font-bold text-2xl'>Misteradev</h3>
                    </div>
                    <div className='py-4 text-sm'>
                        <p>{footer.copylight1}</p>
                        <p>{footer.copylight2}</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3 text-center md:text-left'>
                    <div>
                        <h4 className='text-2xl font-bold mb-4'>Company</h4>
                        {footer.company.map((item, i) => (
                            <div key={i} className='py-1'>
                                <Link href="/">{item.text}</Link>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold mb-4'>Support</h4>
                        {footer.Support.map((item, i) => (
                            <div key={i} className='py-1'>
                                <Link href="/">{item.text}</Link>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold mb-4'>Stay up to date</h4>
                        <form className='flex justify-center items-center'>
                            <input
                            className='p-2 rounded-lg bg-gray-200 text-black'
                            type="email" name='email' id='email' placeholder='Your email address'/>
                            <FaTelegramPlane className='absolute text-gray-500 ml-48'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}