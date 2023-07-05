import Link from "next/link";

//Images
import pic001 from '../public/images/Logo2.png'
import pic002 from '../public/images/Hero.png'
import pic003 from '../public/images/Hero1.png'
import pic004 from '../public/images/image01.png'
import pic005 from '../public/images/Logo1.png'
import pic006 from '../public/images/image02.png'
import pic007 from '../public/images/image03.png'

// React Icon
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


// icons
import icon from '../public/images/icons/Logo.png'
import icon1 from '../public/images/icons/Logo-1.png'
import icon2 from '../public/images/icons/Logo-2.png'
import icon3 from '../public/images/icons/Logo-3.png'
import icon4 from '../public/images/icons/Logo-4.png'
import icon5 from '../public/images/icons/Logo-5.png'
import icon7 from '../public/images/icons/Logo-7.png'
import icon8 from '../public/images/icons/Logo-8.png'
import icon9 from '../public/images/icons/Logo-9.png'
import icon10 from '../public/images/icons/Icon-10.png'
import icon11 from '../public/images/icons/Icon-11.png'
import icon12 from '../public/images/icons/Icon-12.png'
import icon13 from '../public/images/icons/Icon-13.png'

export const Contents = {
    navmenu: {
        piclogo: pic001,
        name: [
            {text: <Link href="/">Home</Link>},
            {text: <Link href="/service">Service</Link>},
            {text: <Link href="/feature">Feature</Link>},
            {text: <Link href="/product">Product</Link>},
            {text: <Link href="/testimonial">Testimonial</Link>},
            {text: <Link href="/faq">FAQ</Link>},
        ],
    },
    footer: {
        piclogo: pic005,
        copylight1: "Copyright © 2020 Nexcent ltd.",
        copylight2: "All rights reserved",
        company: [
            {text: "About Us"},
            {text: "Blog"},
            {text: "Contact us"},
            {text: "Pricing"},
            {text: "Testimonials"},
        ],
        Support: [
            {text: "Help center"},
            {text: "Terns of service"},
            {text: "Legal"},
            {text: "Privacy prolicy"},
            {text: "Status"},
        ],
    },

    heroimage: {
        heroimg1: pic002,
        heroimg2: pic003
    },

    ourclients: {
        title: "Our Clients",
        desc: "We have been working with some Fortune 500+ clients",
        icon: [
            {img: icon},
            {img: icon1},
            {img: icon2},
            {img: icon3},
            {img: icon4},
            {img: icon5},
        ],
    },

    systemimg: {
        membership: [
            {icon: icon7, title: "Membership Organisations", desc: "Our membership management software provides full automation of membership renewals and payments" },
            {icon: icon8, title: "National Associations", desc: "Our membership management software provides full automation of membership renewals and payments" },
            {icon: icon9, title: "Clubs And Groups", desc: "Our membership management software provides full automation of membership renewals and payments" }
        ],
    },
    
    pixelgrade: {
        image1: pic004,
        title: "The unseen of spending three years at Pixelgrade",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
    },

    helping: {
        title1: "Helping a local",
        title2: "business reinvent itself",
        desc: "We reached here with our hard work and dedication",
        member: [
            {img: icon10, number: "2,245,341", desc: "Members"},
            {img: icon11, number: "46,328", desc: "Clubs"},
            {img: icon12, number: "828,867", desc: "Event Bookings"},
            {img: icon13, number: "1,926,436", desc: "Payments"},
        ],
    },

    design: {
        image: pic006,
        title: "How to design your site footer like we did",
        desc: "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.",
    },

    timSmith: {
        image: pic007,
        text1: "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.",
        text2: "Tim Smith",
        text3: "British Dragon Boat Racing Association",
        icons: [
            {icon: icon},
            {icon: icon1},
            {icon: icon2},
            {icon: icon3},
            {icon: icon4},
            {icon: icon5},
        ],
    },

    marketing: {
        title: "Caring is the new marketing",
        desc: "The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​",
        feature: [
            {desc: "Creating Streamlined Safeguarding Processes with OneRen", read: <Link href="/">Readmore</Link>, icon: <HiOutlineArrowNarrowRight/>},
            {desc: "Creating Streamlined Safeguarding Processes with OneRen", read: <Link href="/">Readmore</Link>, icon: <HiOutlineArrowNarrowRight/>},
            {desc: "Creating Streamlined Safeguarding Processes with OneRen", read: <Link href="/">Readmore</Link>, icon: <HiOutlineArrowNarrowRight/>}
        ],
    },

    suscipit: {
        title: "Pellentesque suscipit fringilla libero eu.",
        button: <Link href="/">Get a Demo</Link>,
        icon: <HiOutlineArrowNarrowRight/>
    },
};