'use client'
import React from 'react'
import { useState } from 'react'
import Register from './components/Register'
export default function SignupForm() {
  const [error, setError] = useState('')
  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100'>
      <div className='w-full max-w-md bg-white p-8 shadow-lg rounded-2xl border border-gray-100'>
        <div className='mb-8 text-center'>
          <h2 className='text-3xl font-bold text-gray-800 mb-2'>
            Create Account
          </h2>
          <p className='text-gray-500 text-sm'>Sign up to get started</p>
        </div>
        <Register />

        {error && (
          <div className='mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-md'>
            <p className='text-red-600 text-sm flex items-center'>
              <svg
                className='w-4 h-4 mr-2'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                  clipRule='evenodd'
                />
              </svg>
              {error}
            </p>
          </div>
        )}

        <div className='mt-6 text-center text-sm'>
          <p className='text-gray-600'>
            Already have an account?{' '}
            <a
              href='#'
              className='font-medium text-indigo-600 hover:text-indigo-500'
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
