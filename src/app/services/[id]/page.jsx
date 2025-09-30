import Image from 'next/image'
import React from 'react'
import dbConnect, { collectionNameObject } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import { Button } from '@/components/ui/button'

export default async function ServiceDetailsPage({ params }) {
  const p = await params
  const serviceCollection = dbConnect(collectionNameObject.serviceCollection)
  const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) })

  return (
    <div className='w-full pr-[5%] pl-[5%]'>
      <section className='flex justify-center items-center'>
        <figure className='relative '>
          <Image
            src={'/assets/images/checkout/checkout.png'}
            alt={'banner'}
            height={300}
            width={1137}
          />
          <div className=' transparent-layer overlat-bg absolute text-white text-4xl font-bold w-full h-full top-0'>
            <div className='w-full h-full flex  items-center ps-16'>
              <div>
                <h1>Service Details</h1>
              </div>
            </div>
          </div>
        </figure>
      </section>
      <section className='flex lg:flex-row md:flex-row flex-col justify-center items-center mt-4 gap-4 w-full'>
        {/* // left side */}
        <div className=' flex flex-col w-[60%] p-0 '>
          <div className=''>
            <Image
              src={data.img}
              alt={data.title}
              width={720}
              height={400}
              className='w-full h-64 object-cover rounded-lg'
            />
          </div>
          <div className='relative'>
            <h3 className='text-xl font-semibold mt-2'>{data.title}</h3>
            <p className='text-gray-600 mt-1'>${data.price}</p>
            <p className='text-gray-700 mt-2'>{data.description}</p>
          </div>
        </div>
        {/* // right side */}
        <div className='flex flex-col w-[40%] items-center justify-center bg-amber-400 h-screen top-0 p-7  '>
          <div className='w-full items-center justify-center h-full bg-amber-100 '>
            <p className='text-gray-600 mt-1 font-bold text-2xl'>
              Price:${data.price}
            </p>
            <Button className='w-full text-2xl font-bold '>Checkout</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
