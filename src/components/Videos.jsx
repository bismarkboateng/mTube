import React from "react";
import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {

  return (
    <Stack flexWrap="wrap"
      direction={ direction || "row" }
      justifyContent="start"
      mr="10px"
    >
      { videos.map((items, idx) => (
        <Box key={idx}>
         { items?.id?.videoId && <VideoCard items={items} /> }
         { items?.id?.channelId && <ChannelCard items={items} /> }

        </Box>
      ))}

    </Stack>
  )
}

export default Videos
