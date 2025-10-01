'use server'

import dbConnect, { collectionNameObject } from '@/lib/dbConnect'
import bcrypt from 'bcrypt'

export const loginUser = async (payload) => {
  const { email, password } = payload
  const userCollection = dbConnect(collectionNameObject.userCollection)

  const user = await userCollection.findOne({ email })
  if (!user) {
    throw new Error('User not found')
  }
  // Here you should verify the password, e.g., using bcrypt
  const isPasswordOk = await bcrypt.compare(password, user.password)
  if (!isPasswordOk) {
    throw new Error('Invalid password')
  }
  // Return user data excluding sensitive information

  return user
}
