"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { play, pause, setDuration, setCurrentTime, seek, nextSurah  } from '@/redux/slices/playerSlice'

const PlayerComponent = () => {
  const dispatch = useDispatch()
  const { currentSurah, isPlaying, currentTime, duration } = useSelector(state => state.player)
  const audioRef = useRef(null)

  // Format seconds -> mm:ss
  const formatTime = (sec = 0) => {
    if (Number.isNaN(sec)) sec = 0;
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  // Setup audio element and event listeners (only once)
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      dispatch(setDuration(audio.duration));
    };

    const handleTimeUpdate = () => {
      dispatch(setCurrentTime(audio.currentTime));
    };

    const handleEnded = () => {
      // console.log("Surah ended ✅");
      dispatch(nextSurah()); // autoplay next Surah
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [dispatch]);

  // Load and play new surah when currentSurah changes
  useEffect(() => {
    if (!audioRef.current || !currentSurah) return;
    const audio = audioRef.current;

    audio.src = currentSurah.src;
    audio.currentTime = 0;

    if (isPlaying) {
      audio.play().catch(err => console.log("Play error:", err));
    }
  }, [currentSurah]);

  // Sync play / pause with Redux state
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(err => console.log("Play error:", err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handle seek when user clicks progress bar
  const handleSeek = (e) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
    dispatch(seek(newTime));
  };

  // Percentage played
  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div>
      <div id="player" className='w-screen flex justify-between max-sm:justify-center items-center bg-black p-2 h-[15vh] fixed bottom-0 left-0'>
        {/* LEFT SECTION */}
        <div id="leftsection" className='h-full flex gap-3 max-sm:hidden'>
          <div id='leftsectionimage' className='relative h-full  w-[6vw] bg-white rounded-2xl max-sm:hidden'>
            <Image
              src={currentSurah?.image || "/placeholder.png"}
              alt={currentSurah?.title || "No Surah"}
              fill={true}
              className='rounded-2xl'
            />
          </div>

          <div id='leftsectiontext' className='text-white font-bold flex flex-col'>
            <span>{currentSurah?.title || "No Surah playing"}</span>
            <span className='text-sm font-semibold text-gray-400'>{currentSurah?.reader || ""}</span>
          </div>
        </div>

        {/* MID SECTION */}
        <div id="midsection" className='flex flex-col items-center justify-center w-[40%] max-sm:w-[90%]'>
          {/* Controls */}
          <div className='text-white font-bold flex gap-6 items-center justify-center max-sm:gap-8'>
            {/* Prev */}
            <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ededed" viewBox="0 0 256 256" className="max-sm:w-10 max-sm:h-10">
              <path d="M199.81,34a16,16,0,0,0-16.24.43L64,109.23V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0V146.77l119.57,74.78A15.95,15.95,0,0,0,208,208.12V47.88A15.86,15.86,0,0,0,199.81,34ZM192,208,64.16,128,192,48.07Z"></path>
            </svg>

            {/* Play / Pause */}
            {isPlaying ? (
              <svg onClick={() => dispatch(pause())} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ededed" viewBox="0 0 256 256" className="max-sm:w-14 max-sm:h-14">
                <path d="M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"></path>
              </svg>
            ) : (
              <svg onClick={() => dispatch(play())} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ededed" viewBox="0 0 256 256" className="max-sm:w-14 max-sm:h-14">
                <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"></path>
              </svg>
            )}

            {/* Next */}
            <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ededed" viewBox="0 0 256 256" className="max-sm:w-10 max-sm:h-10">
              <path d="M200,32a8,8,0,0,0-8,8v69.23L72.43,34.45A15.95,15.95,0,0,0,48,47.88V208.12a16,16,0,0,0,24.43,13.43L192,146.77V216a8,8,0,0,0,16,0V40A8,8,0,0,0,200,32ZM64,207.93V48.05l127.84,80Z"></path>
            </svg>
          </div>

          {/* Custom Seekbar */}
          <div className="flex items-center gap-2 w-full text-white mt-3 max-sm:mt-4">
            <span className="text-xs text-gray-400 max-sm:text-sm">{formatTime(currentTime)}</span>

            <div
              className="relative flex-1 h-2 bg-gray-700 rounded-full cursor-pointer max-sm:h-3"
              onClick={handleSeek}
            >
              <div
                className="absolute h-full bg-green-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="text-xs text-gray-400 max-sm:text-sm">{formatTime(duration)}</span>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div id="rightsection" className='flex justify-center items-center gap-3 p-5 max-sm:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#ededed" viewBox="0 0 256 256"><path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"></path></svg>
          <div className='w-20 h-1 rounded-full bg-slate-50'></div>
        </div>
      </div>
    </div>
  )
}

export default PlayerComponent
