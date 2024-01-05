import React, { useEffect, useState } from 'react';
import Header from './Header';
import { BGIMG } from '../constants/imageURI';
import { validateInput } from '../utils/validation';
import { inputType } from '../constants/validationType';

const Login = () => {
    const [ isSignInPage, setIsSignInPage] = useState(true);
    const [ userName, setUserName ] = useState('');
    const [ userEmail, setUserEmail ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');
    const [ errorInName, setErrorInName ] = useState(null);
    const [ errorInEmail, setErrorInEmail ] = useState(null);
    const [ errorInPassword, setErrorInPassword ] = useState(null);

    const toggleSignInForm = ()=>{
        setIsSignInPage(!isSignInPage);
        setUserName('');
        setUserEmail('');
        setUserPassword('');
        setErrorInEmail(null);
        setErrorInName(null);
        setErrorInPassword(null);
    };
    useEffect(()=>{
        const errorMsg = userEmail && validateInput(inputType.email, userEmail);
        setErrorInEmail(errorMsg);
    },[userEmail]);
    useEffect(()=>{
        const errorMsg = userName && validateInput(inputType.name, userName);
        setErrorInName(errorMsg);
    },[userName]);
    useEffect(()=>{
        const errorMsg = userPassword && validateInput(inputType.password, userPassword);
        setErrorInPassword(errorMsg);
    },[userPassword]);
    
    const handleUserEmail = (event)=>{
        setUserEmail(event.target.value);
    };
    const handleUserName = (event)=>{
        setUserName(event.target.value);
    };
    const handleUserPassword = (event)=>{
        setUserPassword(event.target.value);
    };

    const handleButtonClick = ()=>{
        const errorInEmail = validateInput(inputType.email, userEmail);
        setErrorInEmail(errorInEmail);
        const errorInPassword = validateInput(inputType.password, userPassword);
        setErrorInPassword(errorInPassword);
        const errorInName= validateInput(inputType.name, userName);
        setErrorInName(errorInName);
        const errorInInput = isSignInPage ? (errorInEmail || errorInPassword) : (errorInName || errorInEmail || errorInPassword);
        if(errorInInput){
            console.log('Error');
        }else{
            console.log('No Error');
        }
    };
    return (
        <div>
            <Header />
            <img className='fixed size-full' src={BGIMG} alt="bg-img" />
            <form onSubmit={(e)=>e.preventDefault()} className='absolute md:w-4/12 mx-auto my-36 p-12 bg-black bg-opacity-80 right-0 left-0 text-white rounded-lg'>
                <h1 className='font-bold text-3xl my-8'>
                    {isSignInPage ? 'Sign In': 'Sign Up'}
                </h1>
                { !isSignInPage && <input type="text" placeholder='Full Name' value={userName} onChange={handleUserName} className='p-4 my-2 w-full bg-gray-800 rounded-sm'/> }
                { !isSignInPage && <p className=' text-red-700 '> {errorInName}</p> }
                <input type="text" placeholder='Email or Phone Number' value={userEmail} onChange={handleUserEmail} className='p-4 my-2 w-full bg-gray-800 rounded-sm'/>
                <p className=' text-red-700 '> {errorInEmail}</p>
                <input type="password" placeholder='Password' value={userPassword} onChange={handleUserPassword} className='p-4 my-2 w-full bg-gray-800 rounded-sm'/>
                <p className=' text-red-700 '> {errorInPassword}</p>
                <button className=' bg-red-700 w-full my-6 p-4 rounded-lg font-bold' onClick={handleButtonClick}>
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