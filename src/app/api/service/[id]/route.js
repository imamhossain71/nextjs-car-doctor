import { NextResponse } from 'next/server'
import dbConnect, { collectionNameObject } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'

export const GET = async (req, { params }) => {
  //   const { id } = params
  const p = await params
  const serviceCollection = dbConnect(collectionNameObject.serviceCollection)
  const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) })

  return NextResponse.json(data)
}
