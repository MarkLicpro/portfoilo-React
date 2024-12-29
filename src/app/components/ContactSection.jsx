import React from 'react'
import Image from 'next/image'

const ContactSection = () => {
  return (
    <div className=' grid grid-cols-2 md:flex-row md:gap-2 m-8 justify-between'>
      <div className='col-span-7 place-self-center text-center sm:text-left'>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
          <Image
            src='/images/signature.png'
            alt='hero image'
            className='w-[250px] h-[100px] align-middle'
            width={300}
            height={300}
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                Sarah Dayan
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
      <div className=' col-span-5 place-self-center mt-4 lg:mt-0 max-w-md w-full mx-auto p-6 dark:bg-slate-800 rounded-lg shadow-md '>


        <h2 className='text-3xl text-center text-pink-600 font-bold mb-6'> Contact Form</h2>
        <form action="">
          <div className='mb-4'>
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">Name:</label>
            <input placeholder="" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-400" type="text" id="name" name="name" required />
          </div>
          <div className='mb-4'>
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className='mb-4'>
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="message">Message:</label>
            <input id="message" name="message" required></input>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactSection