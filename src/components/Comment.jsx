import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Comment = ({ comments: { snippet : { topLevelComment }} }) => {

  console.log(topLevelComment);
  return (
    <Stack direction="column">
        <Box sx= {{
            marginTop: "10px",
            background: "gray",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "10px",
            borderRadius: "5px"
        }}
        >
            <Typography color="#fff" fontWeight="bold">
              { topLevelComment?.snippet?.textDisplay } 
            </Typography>

        
            <Typography color="#fff" fontWeight="bold">
              By: { topLevelComment?.snippet?.authorDisplayName}
            </Typography>
            
        </Box>
    </Stack>
  )
}

export default Comment
