import UpdateForm from '@/components/forms/UpdateForms'

import React from 'react'

export default async function UpdateBookingPage({ params }) {
  const p = await params
  const res = await fetch(`http://localhost:3000/api/my-bookings/${p.id}`, {
    cache: 'no-store',
  })
  const booking = await res.json()

  return (
    <div>
      <UpdateForm data={booking} />
    </div>
  )
}
