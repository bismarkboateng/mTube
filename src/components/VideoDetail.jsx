import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { fetchData } from "../utils/fetchData";


const VideoDetail = () => {
  const [video, setVideo] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchData(`videos?part=snippet&id=${id}`)
      .then((data) => setVideo(data.items))

  }, [id]);

  if (!video) return "Loading...";

  console.log(video[0].snippet.title)
  console.log(video[0].statistics.viewCount)

  return (
    <Box minHeight="95vh">
      <Stack direction="row">
        <Stack direction="column">
          <Box sx={{ position: "relative", paddingTop: "56.25%"}}>
            <ReactPlayer url={`https://youtube.com/watch?v=${id}`} 
              controls
              style={{ position: "absolute", top: "0", left: "0"}}
            />
          </Box>
          <Typography variant="body2" color="#fff">
            { video[0].snippet.title}
          </Typography>
        </Stack>
      </Stack>
    </Box>

  )
}

export default VideoDetail
