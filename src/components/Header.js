import React from 'react'
import { LOGO } from '../constants/imageURI'

const Header = () => {
  return (
    <div className='absolute w-screen bg-gradient-to-b px-6 py-2 from-black z-10'>
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo"/>
    </div>
  )
}

export default Header