import React from 'react'
import MainContentNavbar from './MainContentNavbar'
import MainContentAlbumContainer from './MainContentAlbumContainer'
import MainContentSurahContainer from './MainContentSurahContainer'

const MainContent = () => {
  return (
    <div>
      <MainContentNavbar />

      <div id="contentcontainer">
        {/* <MainContentAlbumContainer /> */}

        <MainContentSurahContainer />
      </div>
    </div>
  )
}

export default MainContent

