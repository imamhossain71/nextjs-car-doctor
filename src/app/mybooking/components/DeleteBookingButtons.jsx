'use client'
import React from 'react'
import { MdDelete } from 'react-icons/md'
export default function DeleteBookingButtons({ id }) {
  const handleDelete = async () => {
    const proceed = confirm('Are you sure, you want to delete this booking?')
    if (proceed) {
      const res = await fetch(`http://localhost:3000/api/service/${id}`, {
        method: 'DELETE',
      })
      const data = await res.json()
      if (data.deletedCount > 0) {
        alert('Deleted Successfully')
        window.location.reload()
      }
    }
  }

  return (
    <>
      <MdDelete
        onClick={() => handleDelete(id)}
        className='h-8 w-8 text-red-600'
      />
    </>
  )
}
