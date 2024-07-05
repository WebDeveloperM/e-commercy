import React from 'react'
import Banner from "../../assets/website/orange-pattern.jpg"

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgrounRepeat: "no-repeat",
    backgrounSize: "cover",
    height: "100%",
    width: "100%"
}

export default function Subscribe() {
    return (
        <div data-aos="zoom-in"
            className='mb-20 bg-gray-100 dark:bg-gray-800 text-white' style={BannerImg}
        >
            <div className='container backdrop-blur-sm py-10'>
                <div className='space-y-6 max-w-xl mx-auto'>
                    <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Projects</h1>
                    <input type="text"
                    className='w-full p-3' 
                    data-aos="fade-up"
                    placeholder='Enter your email'
                    />
                </div>
            </div>
        </div>
    )
}
