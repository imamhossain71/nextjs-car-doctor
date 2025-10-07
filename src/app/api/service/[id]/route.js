import { NextResponse } from 'next/server'
import dbConnect, { collectionNameObject } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOption'
import { revalidatePath } from 'next/cache'

export const DELETE = async (req, { params }) => {
  const bookingCollection = dbConnect(collectionNameObject.bookingCollection)
  const p = await params
  const query = { _id: new ObjectId(p.id) }
  // validation
  const session = await getServerSession(authOptions)
  const currentBooking = await bookingCollection.findOne(query)
  const isOwnerOk = session?.user?.email == currentBooking.email
  if (!isOwnerOk) {
    return NextResponse.json(
      { message: 'You are not allowed to delete this booking' },
      { status: 403 }
    )
  } else {
    const deleteResponse = await bookingCollection.deleteOne(query)
    revalidatePath('/mybooking')
    return NextResponse.json(deleteResponse)
    // console.log("owner ok")
  }
}

export const GET = async (req, { params }) => {
  //   const { id } = params
  const p = await params
  const serviceCollection = dbConnect(collectionNameObject.serviceCollection)
  const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) })

  return NextResponse.json(data)
}
