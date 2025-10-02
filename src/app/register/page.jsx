import React from 'react'
import Image from 'next/image'

import Register from './components/Register'
export default function SignupForm() {
  return (
    <>
      <h1 className='text-3xl font-bold text-center my-8'> Registetion</h1>
      <section className=' container grid grid-cols-12 '>
        {/* left section */}
        <div className='col-span-12 md:col-span-6 flex justify-center items-center'>
          <Image
            className='hidden md:block'
            src={'/assets/images/login/login.svg'}
            width={460}
            height={500}
            alt='authentication image'
          />
        </div>
        {/* right section */}
        <div className='col-span-12 md:col-span-6 flex justify-center items-center'>
          <Register />
        </div>
      </section>
    </>
  )
}
