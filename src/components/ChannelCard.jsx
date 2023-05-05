import React from "react";
import { Stack, Typography, Card, CardContent, CardMedia} from "@mui/material";
import { Link } from "react-router-dom";

const ChannelCard = ({ items }) => {

  if(!items) return "Loading...";
  return (
    <Link to={`/channel/${items?.id.channelId }`} className="link-style">
        <Card
            sx={{ maxWidth: "300px",
                mr: "15px", mb: "10px",
                backgroundColor: "#1a1919",
            }}

        >
            <CardMedia 
                component="img"
                height="250"
                width="300"
                image={items?.snippet?.thumbnails?.high?.url}
                backgroundColor="#1a1919"
                alt="videocard image"
                sx={{ borderRadius: "50%"}}
            />
            <CardContent>
                <Stack direction="column">
                    <Typography variant="body1" color="#fff"
                    sx={{ mb: "5px", margin: "auto" }}
                    fontWeight="bold"
                    >
                        { items?.snippet?.title}
                    </Typography>
                    {/* <Typography variant="body" color="gray" fontWeight="bold">
                        { items?.snippet?.channelTitle}
                    </Typography> */}
                </Stack>
            </CardContent>
        </Card>
    </Link>

  )
}

export default ChannelCard