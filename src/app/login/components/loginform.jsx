'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function Loginform() {
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    toast('Submitting...')
    try {
      const response = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/',
      })
      if (response?.ok) {
        toast.success('Login successful!')
        router.push('/')
        form.reset()
      } else {
        toast.error('Login failed: ' + (response?.error || 'Unknown error'))
      }
      // router.push('/')
      // console.log(email, password)
    } catch (error) {
      console.log(error)
      // alert('Login failed')
    }

    // You can add your login logic here, e.g., call an API or use NextAuth
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='w-full max-w-lg space-y-8 gap-2'>
        <label className='form-control w-full '>
          <div className='level w-full'>
            <span className='label-text font-bold'>Email</span>
          </div>
          <input
            className='input input-bordered w-full '
            name='email'
            id='email'
            type='email'
            placeholder='Enter your email'
          />
        </label>

        <label className='form-control w-full'>
          <div className='level w-full'>
            <span className='label-text font-bold'>Password</span>
          </div>
          <input
            className='input input-bordered w-full '
            name='password'
            id='password'
            type='password'
            placeholder='Enter your password'
          />
        </label>

        <div className='flex flex-col items-center justify-between mt-8 gap-1.5'>
          <button
            className=' w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Sign In
          </button>
          <a
            className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
            href='#'
          >
            Forgot Password?
          </a>
          or SignIn with
          <div className='flex flex-row gap-4 mt-5'>
            <FaFacebook className='text-3xl text-blue-600 mx-auto cursor-pointer' />
            <FaGoogle className='text-3xl text-red-600 mx-auto cursor-pointer' />
            <FaGithub className='text-3xl mx-auto cursor-pointer' />
          </div>
          <div className='mt-4'>
            Already have an account?{' '}
            <a href='/register' className='text-blue-600 font-bold'>
              Register
            </a>
          </div>
        </div>
      </form>
    </>
  )
}
