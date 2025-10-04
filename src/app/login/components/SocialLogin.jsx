'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'

export default function SocialLogin() {
  const router = useRouter()
  const session = useSession()
  const handleSocialLogin = async (providerName) => {
    const result = await signIn(providerName, { redirect: false })
    if (result?.ok) {
      router.push('/')
      toast.success(`Social login successfully with ${providerName}`)
    } else {
      // toast.error('Social login failed. Please try again.')
      toast.error(result?.error)
    }
    // console.log('SOCIAL LOGIN WITH: ', providerName)
    // const result = await signIn(providerName, { redirect: false })
    // if (result?.ok) {
    //   router.push('/')
    //   toast.success(`Social login successfully with ${providerName}`)
    // } else {
    //   toast.error('Social login failed. Please try again.')
    // }
    // console.log(result)
  }
  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/')
      toast.success('Login successfully')
    }
  }, [session?.status])
  return (
    <div className='flex justify-center gap-8 mt-5'>
      <p
        onClick={() => handleSocialLogin('google')}
        className='bg-salte-200 rounded-full p-3'
      >
        <FaGoogle
          className='text-3xl text-red-600 mx-auto cursor-pointer'
          type='button'
        />
      </p>
      <p
        onClick={() => handleSocialLogin('github')}
        className='bg-salte-200 rounded-full p-3'
      >
        <FaGithub className='text-3xl mx-auto cursor-pointer' type='button' />
      </p>
    </div>
  )
}
