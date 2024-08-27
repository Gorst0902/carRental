import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'

const FooterLinks = [
    {
        id: 1,
        title: "Home",
        link: "/#",
    },
    {
        id: 2,
        title: "About",
        link: "/#about",
    },
    {
        id: 3,
        title: "Contact",
        link: "/#contact",
    },
    {
        id: 4,
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
    return (
        <div className='bg-gray-100 dark:bg-dark dark:text-white'>
            <div className="container">
                <div className="grid md:grid-cols-3 py-5">
                    <div className="py-8 px-4">
                        <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center'>
                            Car Rental
                        </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Perferendis officiis natus recusandae nemo placeat veritatis aperiam totam at excepturi nobis.
                        </p>
                        <br />
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow />
                            <p>
                                Go Vap, Ho Chi Minh City
                            </p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaMobileAlt />
                            <p>
                                +84 1234 1234
                            </p>
                        </div>

                        <div className='flex items-center gap-3 mt-3'>
                            <a href="#">
                                <FaInstagram className='text-3xl hover:text-primary duration-300' />
                            </a>
                            <a href="#">
                                <FaFacebook className='text-3xl hover:text-primary duration-300' />
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl hover:text-primary duration-300' />
                            </a>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl sm:text-left font-bold text-justify mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLinks.map((data) => (
                                            <li
                                                key={data.id}
                                                className='cursor-pointer hover:text-primary duration-300'
                                            >
                                                <span className='mr-2'>&#11162;</span>
                                                <a href={data.link}>
                                                    {data.title}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl sm:text-left font-bold text-justify mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLinks.map((data) => (
                                            <li
                                                key={data.id}
                                                className='cursor-pointer hover:text-primary duration-300'
                                            >
                                                <span className='mr-2'>&#11162;</span>
                                                <a href={data.link}>
                                                    {data.title}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl sm:text-left font-bold text-justify mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLinks.map((data) => (
                                            <li
                                                key={data.id}
                                                className='cursor-pointer hover:text-primary duration-300'
                                            >
                                                <span className='mr-2'>&#11162;</span>
                                                <a href={data.link}>
                                                    {data.title}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer