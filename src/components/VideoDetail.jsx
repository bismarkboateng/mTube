import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { fetchData } from "../utils/fetchData";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";
import Comment from "./Comment";


const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [comment, setComment] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchData(`videos?part=snippet&id=${id}`)
      .then((data) => setVideo(data.items))

    fetchData(`search?relatedToVideoId=${id}&part=snippet&type=video`)
      .then((data) => setVideos(data.items))

    fetchData(`commentThreads?part=snippet&videoId=${id}&maxResults=100`)
      .then((data) => setComment(data.items))
    
  }, [id]);

  if (!video) return "Loading...";

  // console.log(video[0]?.snippet?.title)
  // console.log(video[0]?.snippet?.channelTitle)
  // console.log(video[0]?.statistics?.viewCount)
  // console.log(video[0]?.statistics?.likeCount)
  console.log(video[0])

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between"}} minHeight="95vh">

      <Box sx={{ display: "flex", flexDirection: "column", padding: "20px", width: "75%"}}>
          <Box sx={{ width: "100%", height: "700px"}}>
            <ReactPlayer url={`https://youtube.com/watch?v=${id}`} 
              controls
              className="react-player"
            />
          </Box>
          <Typography variant="body2" color="#fff" fontWeight="bold" mt="10px">
            { video[0]?.snippet?.title}
          </Typography>
          

          <Box sx={{ display: "flex", justifyContent:"space-between"}}>
            <Typography sx={{ paddingLeft: "10px",marginTop: "10px", color: "#fff", fontWeight: "bold"}}>
              { video[0]?.snippet?.channelTitle }
            </Typography>
            <Box sx={{ display: "flex", paddingTop: "13px"}} gap={2} color="#fff">
              <Typography>
                { video[0]?.statistics?.viewCount } Views 
              </Typography>
              <Typography>
                { video[0]?.statistics?.likeCount } Likes
              </Typography>
            </Box>
          </Box>

          { comment.map((items, idx) => (
            <Comment 
              className="comment-section"
              comments = {items}
            />
          ))}


      </Box>

      <Box sx={{ paddingRight: "45px"}}>
        <Videos direction="column" videos={videos} />
      </Box>
    </Box>
  )
}

export default VideoDetail
