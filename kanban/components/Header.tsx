"use client";
import React from 'react'

import Avarta from 'react-avatar'
import Image from 'next/image'
import { MagnifyingGlassIcon, UserCircleIcon} from "@heroicons/react/24/solid"

function Header() {
  return (
    <header>
        <div className=' flex flex-col md:flex-row items-center p-5 rounded-b-2xl   '>
            <div
            className='
             absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-400 t0-[#FFC0CB] rounded-md filter blur-3xl opacity-50 -z-50
            
            '
             />
        <Image
        src="/teamuplogo.png"
        alt='TeamUp icon'
        width={300}
        height={100}
        className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
         />

        <div className=' flex items-center space-x-5 flex-1 justify-end w-full'>
            {/* Search Box */}
            <form action="" className=' flex  shadow-md space-x-4 bg-white rounded-md p-3 flex-1 md:flex-initial items-end'>
                <MagnifyingGlassIcon className = " h-6 w-6 text-gray-400" />
                <input type="text" placeholder='Search' className=' flex-1 outline-none' />
                <button hidden type='submit' >Search</button>
            </form>
            {/* Avatar  */}
            <Avarta name ="Hakeemee Kirai" round size = "50" color ="#0055D1" />
        </div>
        </div>
       
    </header>
  )
}

export default Header