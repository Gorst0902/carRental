import React from 'react'

const testimonialData = [
    {
        id: 1,
        name: "Fedor Gorst",
        image: "https://cdn.ithethao.vn//uploads/2024/04/29/nguoc-dong-nghet-tho-ha-joshua-filler-fedor-gorst-vo-dich-world-pool-masters-2024_215952.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        aosDelay: "0",
    },
    {
        id: 2,
        name: "Shane Van Boening",
        image: "https://cdnmedia.webthethao.vn/uploads/Chau-La/bil-shanevanboening-1-1010.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        aosDelay: "300",
    },
    {
        id: 3,
        name: "Joshua Filler",
        image: "https://assets.azbilliards.com/wp-content/uploads/2022/08/10223218/unnamed-6-2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        aosDelay: "1000",
    },
];

const Testimonial = () => {
    return (
        <div className='dark:bg-black dark:text-white py-14 sm:pb-24 min-h-[400px]'>
            <div className="container">
                <div className="space-y-4 pb-12">
                    <p
                        data-aos="fade-up"
                        className="text-3xl font-semibold text-center sm:text-4xl font-serif"
                    >
                        What Our Clients Say About Us
                    </p>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="text-center sm:px-10"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis iure consectetur tempora amet.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
                    {testimonialData.map((skill) => (
                        <div
                            key={skill.name}
                            data-aos="fade-up"
                            data-aos-delay={skill.aosDelay}
                            className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
                        >
                            <div className="grid place-items-center ">
                                <img
                                    src={skill.image}
                                    alt=""
                                    className="rounded-full w-20 h-20"
                                />
                            </div>
                            <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                            <p>{skill.description}</p>
                            <p className="text-center font-semibold">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonial