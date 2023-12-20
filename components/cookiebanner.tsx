'use client';

import Link from 'next/link';
import React from 'react';
import { getLocalStorage, setLocalStorage } from '../lib/storageHelper';
import { useState, useEffect } from 'react';

export default function CookieBanner(){
    const [cookieConsent, setCookieConsent] = useState(false);

    useEffect (() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)

        setCookieConsent(storedCookieConsent)
    }, [setCookieConsent])

    
    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        setLocalStorage("cookie_consent", cookieConsent)

    }, [cookieConsent]);

    return (
        <div className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-column gap-4  
                        bg-white rounded-lg shadow ${cookieConsent != null ? "hidden" : "flex"}`}>

            <div className='text-center'>
                <Link href="/cookie"><p>This website uses cookies to ensure you get the best experience. By continuing to use our site, you consent to our use of cookies. Learn more about our cookie policy. <span className='font-bold text-black0'  >[Privacy Policy]</span></p></Link>
            </div>

            
            <div className='flex flex-row gap-2'>
                <button className='bg-purple-900 px-5 py-2 text-white rounded-md border-gray-900' onClick={() => setCookieConsent(false)}>Reject All Cookies</button>
                <button className='bg-purple-900 px-5 py-2 text-white rounded-lg' onClick={() => setCookieConsent(true)}>Accept All Cookies</button>
            </div>   
        </div>
    )}
