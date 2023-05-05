import React from "react";
import { Stack, Typography, Card, CardContent, CardMedia} from "@mui/material";
import { Link } from "react-router-dom";

const VideoCard = ({ items: { id : { videoId}, snippet} }) => {
  return (
    <Link to={`/video/${videoId}`} className="link-style">
        <Card
            sx={{ maxWidth: 300,
                mr: "15px", mb: "10px",
                backgroundColor: "#1a1919"
            }}
        >
            <CardMedia 
                component="img"
                height="250"
                width="300"
                image={snippet?.thumbnails?.high?.url}
                backgroundColor="#1a1919"
                alt="videocard image"
                sx={{ borderRadius: "15px"}}
            />
            <CardContent>
                <Stack direction="column">
                    <Typography variant="body1" color="#fff"
                    sx={{ mb: "5px"}}
                    fontWeight="bold"
                    >
                        { snippet?.title}
                    </Typography>
                    <Typography variant="body" color="gray" fontWeight="bold">
                        { snippet?.channelTitle}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    </Link>

  )
}

export default VideoCard