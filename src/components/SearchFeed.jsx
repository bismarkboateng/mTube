import React from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import { useParams } from "react-router-dom";

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
      fetchData(`search?q=${searchTerm}&part=snippet`)
        .then((data) => setVideos(data.items));
  },[searchTerm]);

  return (
      <Box sx={{ ml: "20px", maxWidth: "90%"}}>
          
          <Typography variant="h5" sx={{ color: "white", fontWeight: "bold", mb: "10px"}}>
             
            <span>{ searchTerm }</span> <span style={{ color: "red" }}>Videos</span>
          </Typography>
          <Box sx={{ display: "flex"}}>
            <Box sx={{ mr: "100px" }}/>
            <Videos videos={videos} />
          </Box>

      </Box>
  )
}

export default Feed
