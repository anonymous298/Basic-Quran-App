"use client"

// import AlbumPageContainer from '@/components/SurahPageContainer'
import MainContentNavbar from '@/components/MainContentNavbar'
import React, { useEffect, useRef } from 'react'
import { useMemo } from 'react'
import { useParams } from 'next/navigation'
import { surahs } from '@/data/surahs'
import SurahPageContainer from '@/components/SurahPageContainer'

const Page = () => {
    const { id } = useParams()
    // const currentSurah = surahs.filter((val) => val.id == id)[0]

    // const displayRef = useRef()

    // console.log(currentSong.bgColor)

    // useEffect(() => {
    //     if (currentSong) {
    //         displayRef.current.style.background = `linear-gradient(${currentSong.bgColor}, #121212)`
    //     }
    // })

    return (    
        <div className={`w-full bg-gradient-to-b  h-[85vh] overflow-auto rounded-[5px]`}>
            <MainContentNavbar />

            <SurahPageContainer id={id}/>
        </div>
    )
}

export default Page
