import React, { useEffect, useState } from "react";
import { Box,Stack  } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { fetchData } from "../utils/fetchData";
import ChannelCardDetail from "./ChannelCardDetail";

const ChannelDetail = () => {
  const [channelInfo, setChannelInfo] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);

  const { id } = useParams();

  console.log(channelVideos);
  useEffect(()=> {
      fetchData(`channels?part=snippet&id=${id}`)
        .then((data) => setChannelInfo(data?.items))

    fetchData(`search?channelId=${id}&part=snippet`)
      .then((data) => setChannelVideos(data.items))
      
  }, [id]);

  return (
    <Stack minHeight="95vh">
      <Box>
        <div className="channel-banner" />
        <ChannelCardDetail items={channelInfo} />
      </Box>

      <Box sx={{ display: "flex"}}>
        <Box sx={{ mr: "100px" }}/>
        <Videos videos={channelVideos} />
      </Box>
    </Stack>
  )
}

export default ChannelDetail
