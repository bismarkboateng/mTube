import React from "react";
import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {

  return (
    <Stack flexWrap="wrap"
      direction={ direction || "row" }
      justifyContent="start"
      mr="10px"
    >
      { videos.map((items, idx) => (
        <VideoCard items={items} />
      ))}
    </Stack>
  )
}

export default Videos
