import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar } from "./";
import { useState } from "react";


const Feed = () => {
  const [ selectedCategory, setSelectedCategory ] = useState("Home");

  return (
    <Stack direction="row" marginTop="20px">
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Box sx={{ ml: "20px"}}>
          <Typography variant="h5" sx={{ color: "white", fontWeight: "bold", }}>
              {selectedCategory} <span style={{ color: "red" }}>Videos</span>
          </Typography>
          <Videos />
      </Box>
    </Stack>
  )
}

export default Feed
