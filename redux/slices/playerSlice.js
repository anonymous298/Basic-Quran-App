import { createSlice } from "@reduxjs/toolkit";
import { surahs } from "@/data/surahs";

const initialState = {
  currentSurah: {
    id: 1,
    title: "Surat AL-Baqarah",
    reader: "Abdullah Awad al-Juhani",
    src: "/surahs/al_baqarah.mp3",
    image: "/images/quranimage.webp",
  },

  isPlaying: false,
  currentTime: 0,
  duration: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrentSurah: (state, action) => {
      // console.log(action.payload)
      state.currentSurah = action.payload;
      state.currentTime = 0;
      state.duration = 0;
      state.isPlaying = true;
    },

    play: (state) => {
      state.isPlaying = true;
    },

    pause: (state) => {
      state.isPlaying = false;
    },

    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },

    setDuration: (state, action) => {
      state.duration = action.payload;
    },

    seek: (state, action) => {
      state.currentTime = action.payload;
    },

    nextSurah : (state) => {
        if (state.currentSurah.id < surahs.length) {

            const nextSurahId = state.currentSurah.id + 1
            const nextSurah = surahs.filter((val) => val.id == Number(nextSurahId))[0]

            // console.log(nextSong)

            state.currentSurah = nextSurah
            state.currentTime = 0
            state.duration = 0
            state.isPlaying = true
        }
    },

    // prevSong : (state) => {
    //     if (state.currentSong.id > 1) {

    //         const nextSongId = state.currentSong.id - 1
    //         const nextSong = songs.filter((val) => val.id == Number(nextSongId))[0]

    //         console.log(nextSong)

    //         state.currentSong = nextSong
    //         state.currentTime = 0
    //         state.duration = 0
    //         state.isPlaying = true
    //     }
    // }
  },
});

export const {
  setCurrentSurah,
  play,
  pause,
  setCurrentTime,
  setDuration,
  seek,
  nextSurah
} = playerSlice.actions;

export default playerSlice.reducer;
