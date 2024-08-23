import React from 'react'
import car1 from "../../assets/car1.png"

const About = () => {
    return (
        <div className='bg-white dark:bg-dark dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center'>
            <div className='container'>
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                    <div
                        data-aos="slide-right"
                        data-aos-duration="1500"
                        data-aos-once="false"
                    >
                        <img
                            src={car1}
                            alt=""
                            className='sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.5)]'
                        />
                    </div>
                    <div>
                        <div className='space-y-5 sm:p-16 pb-6'>
                            <h1
                                className='text-3xl sm:text-4xl font-bold font-serif'
                                data-aos="fade-up"
                            >
                                About us
                            </h1>
                            <p
                                data-aos="fade-up"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione, blanditiis sint expedita ut illo adipisci porro nisi.
                            </p>
                            <p
                                data-aos="fade-up"
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sit iste incidunt accusantium illum.
                            </p>
                            <button className='button-outline' data-aos="fade-up">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About