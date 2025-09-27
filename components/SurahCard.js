"use client"

import Image from 'next/image'
import React from 'react'
import { setCurrentSurah } from '@/redux/slices/playerSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'

const SurahCard = ({data}) => {
  const dispatch = useDispatch()
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/surah/${data.id}`)}>
      <div id="songcard" className='w-[160px] h-[37vh] flex flex-col gap-1 cursor-pointer'>
        <div className='w-full h-[90%] relative'>
            <Image
                alt={data.title}
                src={data.image}
                fill={true}    
                className='rounded-[5px]'
            />
        </div>

        <h3 className='text-white font-bold'>{data.title}</h3>
        <p className='text-gray-400'>{data.reader}</p>
      </div>
    </div>
  )
}

export default SurahCard
