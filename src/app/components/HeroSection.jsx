"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r  from-pink-500 to-purple-500 '>
                            Hi! I'm {""}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                // wait 1s before replacing "Mice" with "Hamsters"
                                'Makki',
                                1000,
                                'Web Developer',
                                1000,
                                'Full Stack Developer',
                                1000,

                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '50px', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        I am a Thailand-based product designer with a focus on web design, illustration. I have a diverse range of experience having worked across various fields and industries.                    </p>
                    <div>
                        <button className='px-4 py-4 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-gray-200 via-gray-500 to-black-500 hover:bg-slate-200 text-white'>
                            Hire Me</button>
                        <button className='px-4 py-4 w-full sm:w-fit rounded-full bg-transparent  hover:bg-slate-800  text-white border border-white mt-3 ' >
                            Download CV</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] relative'>
                        <Image
                            src='/images/hero-image.png'
                            alt='hero image'
                            className='absolute shadow-2xl  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
                <br className='flex border px-1 py-0'></br>
            </div>
        </section>
    )
}

export default HeroSection