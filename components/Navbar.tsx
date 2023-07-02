import { useEffect , useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiMenu } from "react-icons/hi";

// Import data
import { Contents } from '../data/content'

export const { navmenu } = Contents;

type Props = {}

export default function Navbar({}: Props) {
const [sticky, setSticky] = useState(false);
const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("navmenu");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] py-2 ${
        sticky ? "bg-white/60  text-gray-900 shadow-sm" : ""
      }`}>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <Link href="/"><Image src={navmenu.piclogo}alt='logobrand'/></Link>
            </div>
            <div className={` ${sticky ? "lg:bg-white/0 bg-white" : ""} text-gray-900 lg:block hidden px-7 py-2 font-medium  rounded-bl-full`}>
                <ul className='flex items-center gap-4 py-2'>
                    {navmenu.name.map((item, i) => (
                        <li key={i}>
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
            <div
                onClick={() => setOpen(!open)}
                className={`z-[999]  ${
                    open ? "text-yellow-950" : "text-yellow-950"
                } text-3xl lg:hidden m-5`}
                >
                <HiMenu/>
            </div>
              <div
                  className={`lg:hidden text-gray-900 absolute w-60 h-screen px-4 py-2 font-medium bg-white/90 top-0 duration-300 ${open ? "right-0" : "right-[-100%]"
                      }`}
              >
                  <ul className="flex flex-col h-full gap-5 py-2 pt-10 text-lg">
                      {navmenu.name.map((item, i) => (
                          <li
                              onClick={() => setOpen(false)}
                              key={i}
                              className="px-6 hover:text-cyan-600"
                          >
                              {item.text}
                          </li>
                      ))}
                  </ul>
              </div>
            <div className='flex items-center lg:inline-block hidden'>
                <Link className='text-green-600 px-4' href="/login">Login</Link>
                <button className='bg-green-600 py-2 px-4 rounded-lg text-white shadow-sm'><Link href="/sign-up">Sign up</Link></button>
            </div>
        </div>
    </nav>
  )
}