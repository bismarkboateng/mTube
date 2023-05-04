import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";



const Feed = () => {
  const [ selectedCategory, setSelectedCategory ] = useState("Home");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
      fetchData(`search?q=${selectedCategory}&part=snippet&order=date`)
        .then((data) => setVideos(data.items));
  },[selectedCategory]);

  return (
    <Stack direction="row" marginTop="20px">
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Box sx={{ ml: "20px", overflowX: "auto"}}>
          <Typography variant="h5" sx={{ color: "white", fontWeight: "bold", }}>
              {selectedCategory} <span style={{ color: "red" }}>Videos</span>
          </Typography>
          <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
