"use client"

import React, { useRef, useState, useEffect } from 'react'
import { surahs } from '@/data/surahs'
import SurahCard from './SurahCard'

const MainContentSurahContainer = () => {

    const scrollRef = useRef(null)
    const [currentScrollAmount, setCurrentScrollAmount] = useState(0)
    const [canScroll, setCanScroll] = useState(false)

    useEffect(() => {
        const checkScroll = () => {
            if (scrollRef.current) {
                const { scrollWidth, clientWidth } = scrollRef.current
                setCanScroll(scrollWidth > clientWidth)
            }
        }

        checkScroll()
        window.addEventListener("resize", checkScroll)
        return () => window.removeEventListener("resize", checkScroll)
    }, [])

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 600; // how much to scroll each click
            const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

            // Always read directly from the DOM
            const currentScroll = scrollRef.current.scrollLeft;
            const value = direction === "next" ? scrollAmount : -scrollAmount;
            const newScroll = currentScroll + value;

            // Clamp within bounds
            const clampedScroll = Math.max(0, Math.min(newScroll, maxScroll));

            scrollRef.current.scrollTo({
                left: clampedScroll,
                behavior: "smooth",
            });

            // Optional: store in state if you need to show progress/UI
            setCurrentScrollAmount(clampedScroll);

            console.log("current:", currentScroll, "new:", clampedScroll);
        }
    };

    return (
        <div className='p-5 '>
            <h2 className='text-white text-2xl font-bold'>Quran Surahs</h2>

            <div className='relative p-5'>

                {/* Prev Button */}
                {currentScrollAmount > 0 && <button
                    onClick={() => scroll("prev")}
                    className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ededed" viewBox="0 0 256 256"><path d="M152,72H128V32a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,0,11.32l96,96A8,8,0,0,0,128,224V184h24a8,8,0,0,0,8-8V80A8,8,0,0,0,152,72Zm-8,96H120a8,8,0,0,0-8,8v28.69L35.31,128,112,51.31V80a8,8,0,0,0,8,8h24Zm80-88v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm-32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"></path></svg>
                </button>}

                {/* Next Button */}
                <button
                    onClick={() => scroll("next")}
                    className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ededed" viewBox="0 0 256 256"><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H104a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H112V88h24a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"></path></svg>
                </button>

                <div
                    ref={scrollRef}
                    id="surahcontainer"
                    className='flex overflow-x-auto gap-4 no-scrollbar w-full'
                >
                    {surahs.map((data) => {
                        return (
                            <SurahCard
                                key={data.id}
                                data={data}
                            />

                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MainContentSurahContainer
