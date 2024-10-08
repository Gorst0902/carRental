import React from 'react'
import pattern from "../../assets/pattern.jpeg"
import playStore from "../../assets/play_store.png"
import appStore from "../../assets/app_store.png"

const bannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const AppStoreBanner = () => {
    return (
        <div className='dark:bg-dark'>
            <div className='container py-14 '>
                <div className='text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl' style={bannerImg}>
                    <div>
                        <div className='space-y-6 max-w-xl mx-auto'>
                            <h1 className='text-2xl text-center sm:text-4xl font-semibold font-serif' data-aos="fade-up">
                                Get started with our app
                            </h1>
                            <p
                                data-aos="fade-up"
                                className='text-center sm:px-20'
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatibus
                                vitae modi ipsum autem earum cumque alias corrupti laboriosam quasi?
                            </p>
                            <div
                                className='flex flex-wrap justify-center items-center gap-4'
                                data-aos="fade-up"
                            >
                                <a href="#">
                                    <img src={playStore} alt=""
                                        className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                                    />
                                </a>
                                <a href="#">
                                    <img src={appStore} alt=""
                                        className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AppStoreBanner