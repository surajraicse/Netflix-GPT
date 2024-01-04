import React, { useState } from 'react';
import Header from './Header';
import { BGIMG } from '../constants/imageURI';

const Login = () => {
    const [ isSignInPage, setIsSignInPage] = useState(true);
    const toggleSignInForm = ()=>{
        setIsSignInPage(!isSignInPage);
    };
    return (
        <div>
            <Header />
            <img className='absolute h-screen object-cover' src={BGIMG} alt="bg-img"/>
            <form className='absolute md:w-4/12 mx-auto my-36 p-12 bg-black bg-opacity-80 right-0 left-0 text-white rounded-sm'>
                <h1 className='font-bold text-3xl my-8'>
                    {isSignInPage ? 'Sign In': 'Sign Up'}
                </h1>
                { !isSignInPage && <input type="text" placeholder='Full Name' className='p-4 my-2 w-full bg-gray-800 rounded-sm'/> }
                <input type="text" placeholder='Email or Phone Number' className='p-4 my-2 w-full bg-gray-800 rounded-sm'/>
                <input type="password" placeholder='Password' className='p-4 my-2 w-full bg-gray-800 rounded-sm'/>
                <button className=' bg-red-700 w-full my-6 p-4 rounded-lg font-bold'>
                    {isSignInPage ? 'Sign In': 'Sign Up'}
                </button>
                <div className='flex'>
                    <p className=' text-gray-400'>
                        {isSignInPage ? 'New to Netflix?': 'Existing User?'}
                    </p>
                    <p className='px-2 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInPage ? 'Sign Up': 'Sign In'}
                    </p>
                </div>
                
            </form>
        </div>
    )
}

export default Login