import React from 'react'
import Image from 'next/image'
import dbConnect, { collectionNameObject } from '@/lib/dbConnect'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

async function ServicesSection() {
  //   const res = await fetch('/services.json', { cache: 'no-store' })
  const serviceCollection = dbConnect(collectionNameObject.serviceCollection)
  const data = await serviceCollection.find({}).toArray()

  return (
    <div className='grid grid-cols-12 gap-4 p-4'>
      {data.map((item) => {
        return (
          <div
            className='col-span-12 md:col-span-6 lg:col-span-4'
            key={item._id}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={314}
              height={208}
              className='w-full h-64 object-cover rounded-lg'
            />
            <h3 className='text-xl font-semibold mt-2'>{item.title}</h3>
            <p className='text-gray-600 mt-1'>${item.price}</p>
            <Link href={`/services/${item._id}`} className='inline-block'>
              <FaArrowRight className='mt-4 text-blue-500 hover:text-blue-700' />
            </Link>
            {/* <p className='text-gray-700 mt-2'>
              {item.description.length > 100
                ? item.description.substring(0, 100) + '...'
                : item.description}
            </p> */}
          </div>
        )
      })}
    </div>
  )
}

export default ServicesSection
