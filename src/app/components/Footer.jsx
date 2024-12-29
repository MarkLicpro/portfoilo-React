import React from 'react'
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='footer border border-top-[#33353F] border-l-transparent border-r-transparent text-white z-2'>
            <div className='container p-12 flex justify-between' >
                <Image
                    src='/images/Logo.png'
                    alt='logo'

                    width={200}
                    height={50}
                />
                <div className=" ">
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">

                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">

                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">

                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">

                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">

                            <span className="sr-only">Dribbble account</span>
                        </a>
                    </div>
                </div>



            </div>
        </footer>
    )
}

export default Footer