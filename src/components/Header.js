import React from 'react'
import { LOGO } from '../constants/imageURI'
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((store)=>{
    return store.user;
  });
  return (
    <div className='absolute w-screen bg-gradient-to-b px-6 py-2 from-black z-10 flex justify-between'>
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo"/>
        {user && <p className="m-2 py-4 px-16 text-white font-bold text-xl"> {user.userName} </p>}
    </div>
  )
}

export default Header