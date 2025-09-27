// "use client"

import Link from 'next/link'
import React from 'react'

const MainContentNavbar = () => {
    return (

        <div>
            <div id="navbar" className='p-5 flex flex-col gap-4'>
                <div id="uppernavigations" className='w-full flex justify-between items-center'>
                    <div>
                        <h1 className='text-[#F1C40F] font-mono font-bold text-4xl'>Quran App</h1>
                    </div>

                    <div className='flex gap-3 justify-center items-center'>
                        <div className='size-8 cursor-pointer rounded-full bg-gray-700 flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ededed" viewBox="0 0 256 256"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path></svg></div>
                    </div>
                </div>

                <div id="lowernavigations" className='flex gap-2'>
                    <button className='text-black cursor-pointer hover:bg-gray-200 font-semibold bg-white py-1.5 px-5 rounded-full text-sm'>All</button>
                    <button className='text-white cursor-pointer hover:bg-gray-800 font-semibold bg-black py-1.5 px-5 rounded-full text-sm'>Surahs</button>
                    <button className='text-white cursor-pointer hover:bg-gray-800 font-semibold bg-black py-1.5 px-5 rounded-full text-sm'>Ayats</button>
                </div>
            </div>
        </div>
    )
}

export default MainContentNavbar
