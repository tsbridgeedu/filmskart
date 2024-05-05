import { UserProfile } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import '../src/index.css'


const UserSettings = () => {

  useEffect(() => {
    document.querySelector('cl-internal-1fcj7sw')
    if (logo) {
      logo.setAttribute('src', '/logo.png')}
  }, [])
  return (
    <div className='flex justify-center items-center mb-24 '>
        <UserProfile />
    </div>
  )
}

export default UserSettings