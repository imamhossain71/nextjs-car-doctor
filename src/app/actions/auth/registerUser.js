'use server'
import bcrypt from 'bcrypt'
import toast from 'react-hot-toast'

import dbConnect, { collectionNameObject } from '@/lib/dbConnect'

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionNameObject.userCollection)
  //validation
  const { firstName, lastName, email, password } = payload
  if (!firstName || !lastName || !email || !password) {
    throw new Error('All fields are required')
  }
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters long')
  }
  // check if user exists
  const user = await userCollection.findOne({ email: payload.email })
  if (!user) {
    const hassPassword = await bcrypt.hash(password, 10)
    payload.password = hassPassword
    // save user
    const result = await userCollection.insertOne(payload)
    const { acknowledged, insertedId } = result
    return { acknowledged, insertedId }
  }
  return null
  // throw new Error('User already exists')
  toast('User already exists')
}
