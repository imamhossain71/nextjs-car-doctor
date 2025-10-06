import { NextResponse } from 'next/server'
import dbConnect, { collectionNameObject } from '@/lib/dbConnect'
import { authOptions } from '@/lib/authOption'
import { getServerSession } from 'next-auth'

export const GET = async (req) => {
  const session = await getServerSession(authOptions)
  if (session) {
    const email = session?.user?.email
    const bookingCollection = dbConnect(collectionNameObject.bookingCollection)
    const result = await bookingCollection.find({ email }).toArray()
    return NextResponse.json(result)
  }

  return NextResponse.json({})
}

export const POST = async (req) => {
  const body = await req.json()
  const bookingCollection = dbConnect(collectionNameObject.bookingCollection)
  await bookingCollection.insertOne(body)
  const result = { success: true, message: 'Service added successfully' }
  //   result.InsertedId = result
  //   console.log(body)
  return NextResponse.json(result)
}

// import { NextResponse } from 'next/server'

// export const POST = async (req) => {
//   try {
//     const body = await req.json()
//     console.log('Received body:', body)

//     // এখানে তুমি চাইলে DB তে save করার কোড দিতে পারো

//     return new NextResponse(
//       JSON.stringify({ success: true, message: 'Service added successfully' }),
//       {
//         status: 200,
//         headers: {
//           'Access-Control-Allow-Origin': '*', // ✅ Allow all origins
//           'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//           'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//         },
//       }
//     )
//   } catch (error) {
//     console.error('Error processing request:', error)
//     return new NextResponse(
//       JSON.stringify({ success: false, message: 'Server error' }),
//       {
//         status: 500,
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//         },
//       }
//     )
//   }
// }

// // ✅ Handle preflight OPTIONS request (very important for CORS)
// export const OPTIONS = async () => {
//   return new NextResponse(null, {
//     status: 204,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//     },
//   })
// }
