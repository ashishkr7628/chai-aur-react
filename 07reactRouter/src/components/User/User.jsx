import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const {userid}=useParams()
  return (
    <div className='p-2 bg-slate-600 text-xl'>User: {userid}</div>
  )
}

export default User