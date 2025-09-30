import { NextResponse } from 'next/server'

export async function POST(req) {
  const body = await req.json()
  console.log('✅ Received:', body)

  // এখানে DB এ save করতে পারো
  return NextResponse.json({ success: true, message: 'User registered' })
}
