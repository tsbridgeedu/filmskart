import { UserProfile } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import '../src/index.css'


const UserSettings = () => {

  
  return (
    <div className='flex justify-center items-center mb-24 '>
        <UserProfile />
    </div>
  )
}

export default UserSettings