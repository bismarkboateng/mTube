import React from "react";
import { Feed, ChannelDetail, Navbar, SearchFeed, VideoDetail } from "./components";



const App = () => {
  return (
    <div>
      <Navbar />
      <ChannelDetail />
      <Feed />
      <SearchFeed />
      <VideoDetail />
    </div>
  )
}

export default App
