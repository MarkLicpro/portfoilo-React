import React from 'react'

const TimelineSection = () => {
  return (  
  <div className="relative border-s animate-pulse  border-gray-200 dark:border-gray-700 mt-20">
    <h1 className=" text-center text-2xl font-semibold text-gray-900 dark:text-white py-8" >Timeline </h1>    
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2024</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Portfolio in Tailwind CSS</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to one pages including a dashboard layout, Timeline and other.</p>
    </li>              
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2024</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Php with Laravel</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get Learning Basic to use a Hotel website</p>
    </li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2023</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">WordPress</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed Course in Wordpress </p>
    </li>
    <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2023</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">International Bussiness from SDU</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Started working in a private company in import and export. .</p>
    </li>
</div>

  

  )
}

export default TimelineSection