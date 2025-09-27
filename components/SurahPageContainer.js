// components/SurahPageContainer.js
"use client";

import Image from "next/image";
import { surahs } from "@/data/surahs";
import { useDispatch } from "react-redux";
import { setCurrentSurah } from "@/redux/slices/playerSlice";
import Link from "next/link";


const SurahPageContainer = ({ id }) => {
  const currentSurah = surahs.find((val) => val.id == id);

  const dispatch = useDispatch();

  return (
    <div className="min-h-screen text-white p-8">
      <Link href="\" className="flex gap-2 items-center mb-5 cursor-pointer hover:text-[#F1C40F] transition-all max-md:w-[100vw]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="#fcfcfc"
          viewBox="0 0 256 256"
        >
          <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
        </svg>

        <h3>Back To Home</h3>
      </Link>
      {/* Header Section */}
      <div className="flex items-center gap-6 mb-10 max-sm:flex-col">
        <div className="w-48 h-48 relative">
          <Image
            src={currentSurah.image}
            alt={`Cover of ${currentSurah.name}`}
            fill
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-wide text-gray-400">Surah</p>
          <h1 className="text-4xl sm:text-5xl font-bold">
            {currentSurah.title}
          </h1>
          <p className="text-lg text-gray-300">
            Reciter:{" "}
            <span className="font-medium text-emerald-400">
              {currentSurah.reader}
            </span>
          </p>
          <button
            onClick={() => dispatch(setCurrentSurah(currentSurah))}
            className="cursor-pointer mt-4 px-6 py-2 bg-emerald-500 hover:bg-emerald-600 transition rounded-full font-medium shadow-md w-fit"
          >
            ▶ Play Surah
          </button>
        </div>
      </div>

      {/* Verse List Section (placeholder for future verse-by-verse playback) */}
      <div className="space-y-4">
        {currentSurah.verses?.map((verse, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 bg-slate-800/40 rounded-lg hover:bg-slate-700/60 transition"
          >
            <div>
              <p className="text-lg font-medium">{verse.arabic}</p>
              <p className="text-gray-400 text-sm">{verse.translation}</p>
            </div>
            <button className="text-emerald-400 hover:text-emerald-500 transition">
              ▶
            </button>
          </div>
        )) || (
          <p className="text-gray-400 italic">
            Verse data not added yet for this Surah.
          </p>
        )}
      </div>
    </div>
  );
};

export default SurahPageContainer;
