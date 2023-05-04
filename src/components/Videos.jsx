import React from "react";
import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction={{ xs: "column", md: "row"}} flexWrap="wrap"
      sx={{ overflowY: "auto"}} mr="10px"
    >
      { videos.map((items, idx) => (
        <VideoCard items={items} />
      ))}
    </Stack>
  )
}

export default Videos