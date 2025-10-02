'use client'
import { registerUser } from '@/app/actions/auth/registerUser'
import { useState } from 'react'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError('') // Clear error on input change
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      setError('All fields are required')
      return
    }
    // if (formData.password !== formData.confirmPassword) {
    //   setError('Passwords do not match')
    //   return
    // }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }

    try {
      await registerUser(formData)
      // Optionally redirect or show success message
    } catch (err) {
      setError('Registration failed. Please try again.')
      console.error('Registration error:', err)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl'>
        <div>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Join us today! Fill in the details below.
          </p>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='rounded-md shadow-sm space-y-4'>
            <div className='relative'>
              <FaUser className='absolute top-3 left-3 text-gray-400' />
              <input
                type='text'
                name='firstName'
                placeholder='First Name'
                value={formData.firstName}
                onChange={handleChange}
                className='appearance-none rounded-md relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-200'
              />
            </div>
            <div className='relative'>
              <FaUser className='absolute top-3 left-3 text-gray-400' />
              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                value={formData.lastName}
                onChange={handleChange}
                className='appearance-none rounded-md relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-200'
              />
            </div>
            <div className='relative'>
              <FaEnvelope className='absolute top-3 left-3 text-gray-400' />
              <input
                type='email'
                name='email'
                placeholder='Email Address'
                value={formData.email}
                onChange={handleChange}
                className='appearance-none rounded-md relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-200'
              />
            </div>
            <div className='relative'>
              <FaLock className='absolute top-3 left-3 text-gray-400' />
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                className='appearance-none rounded-md relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-200'
              />
            </div>
            {/* <div className='relative'>
              <FaLock className='absolute top-3 left-3 text-gray-400' />
              <input
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                value={formData.confirmPassword}
                onChange={handleChange}
                className='appearance-none rounded-md relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-200'
              />
            </div> */}
          </div>

          {error && <p className='text-red-500 text-sm text-center'>{error}</p>}

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200'
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
