import dbConnect, { collectionNameObject } from '@/lib/dbConnect'
import { NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'
import { revalidatePath } from 'next/cache'

export const GET = async (req, { params }) => {
  //   const { id } = params
  const p = await params
  const bookingCollection = dbConnect(collectionNameObject.bookingCollection)
  const query = { _id: new ObjectId(p.id) }
  const singleBooking = await bookingCollection.findOne(query)

  return NextResponse.json(singleBooking)
}

export const PATCH = async (req, { params }) => {
  const p = await params
  const bookingCollection = dbConnect(collectionNameObject.bookingCollection)
  const query = { _id: new ObjectId(p.id) }
  const body = await req.json()
  const updateDoc = {
    $set: {
      ...body,
      // customer_name: body.customer_name,
      // phone: body.phone,
      // address: body.address,
      // date: body.date,
    },
    // const: { upsert: true },
  }
  const updatedBooking = await bookingCollection.updateOne(query, updateDoc)
  revalidatePath('/mybooking')
  return NextResponse.json(updatedBooking)
}
