import React from "react";
import { Feed, ChannelDetail, Navbar, SearchFeed, VideoDetail } from "./components";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Box sx={{ backgroundColor: "#1a1919", position: "sticky", top: 0}}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/videos/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </BrowserRouter>
    </Box>
  )
}

export default App
