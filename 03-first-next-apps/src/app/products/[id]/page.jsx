import React from 'react'

async function page({ params }) {
    const { id } = await params
  return (
    <div>Product {id} Details</div>
  )
}

export default page