'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

function NavBar() {
  const { data: session, status } = useSession()
  console.log(session)
  const navMenu = () => {
    return (
      <>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/'}>About</Link>
        </li>
        <li>
          <Link href={'/'}>Blog</Link>
        </li>
        <li>
          <Link href={'/'}>Services</Link>
        </li>
        <li>
          <Link href={'/'}>Contact</Link>
        </li>
      </>
    )
  }
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
          >
            {navMenu()}
          </ul>
        </div>
        <Link href={'/'} className=' text-xl'>
          <Image
            src='/assets/logo.svg'
            alt='Logo'
            width={50}
            height={50}
            className='mr-2'
          />
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{navMenu()}</ul>
      </div>
      <div className='navbar-end'>
        {status == 'authenticated' ? (
          <>
            <li>
              <Image
                src={session?.user?.image}
                alt='user image'
                height={50}
                width={50}
              />
            </li>
            <li onClick={() => signOut()} className='m-2'>
              Log out
            </li>
          </>
        ) : (
          <>
            <Link
              href={'/register'}
              className='hover:btn btn-outline font-bold me-2'
            >
              Register
            </Link>
            <Link
              href={'/login'}
              className='hover:btn btn-outline font-bold me-2'
            >
              Login
            </Link>
          </>
        )}

        <a className='btn btn-outline'>Appoinment</a>
      </div>
    </div>
  )
}

export default NavBar
