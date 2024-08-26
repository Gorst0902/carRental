import React from 'react'
import whiteCar from '../../assets/white-car.png'
import car5 from '../../assets/car5.png'
import car6 from '../../assets/car6.png'

const carList = [
    {
        id: 1,
        name: "BMW UX",
        price: 100,
        image: whiteCar,
        aosDelay: "0",
    },
    {
        id: 2,
        name: "KIA UX",
        price: 140,
        image: car5,
        aosDelay: "500",
    },
    {
        id: 3,
        name: "BMW UX",
        price: 100,
        image: car6,
        aosDelay: "1000",
    },
];

const CarList = () => {
    return (
        <div className='pb-12 pt-12 bg-white dark:bg-dark dark:text-white'>
            <div className="container">
                <h1
                    data-aos="fade-up"
                    className='text-3xl sm:text-4xl font-semibold font-serif mb-3'
                >
                    Best car in our shop
                </h1>
                <p
                    data-aos="fade-up"
                    className='text-sm pb-10'
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur dignissimos qui quisquam beatae quae reiciendis
                    deserunt? Quisquam voluptatibus illo atque?
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
                    {
                        carList.map((car) => (
                            <div
                                className='space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group'
                                key={car.id}
                                data-aos="fade-up"
                                data-aos-duration={car.aosDelay}
                            >
                                <div className='w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700'>
                                    <img src={car.image} alt="" />
                                </div>
                                <div className='space-y-2'>
                                    <h1 className='text-primary font-semibold'>{car.name}</h1>
                                    <div>
                                        <p>${car.price}/Day</p>
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                                <p className='text-xl font-semibold absolute top-0 left-3'>
                                    12Km
                                </p>
                            </div>
                        ))
                    }
                </div>

                <div className='grid place-content-center my-8 min-h-[80px]'>
                    <button
                        data-aos="fade-up"
                        className='button-outline'
                    >
                        Get started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarList