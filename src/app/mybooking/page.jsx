'use client'
import MyAllBookings from '@/components/tables/MyBookingTables'
import React, { useEffect, useState } from 'react'

export default function MyBookingPage() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchMyBookings = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/service')
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Error fetching bookings:', error)
      }
    }
    fetchMyBookings()
    //
    // fetch('http://localhost:3000/api/booking')
    // .then(res => res.json())
    // .then(data => setData(data))
  }, [])

  return (
    <div>
      <MyAllBookings data={data} />
    </div>
  )
}
