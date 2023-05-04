import React from "react";
import { MenuIcon, YouTubeIcon, SearchIcon, MicIcon, NotificationsNoneOutlinedIcon, VideocamOutlinedIcon} from "../utils/constants";
import { Stack, Box, Typography, Paper } from "@mui/material";


const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" p={2}>

      <Box sx={{ display: "flex", alignItems: "center"}}>
        <MenuIcon sx={{ color: "#fff", mr: "15px"}}/>
        <YouTubeIcon sx={{ color: "red", fontSize: "40px", mr: "4px"}} />
        <Typography variant="h5" color="#fff" fontWeight="bold">
          Youtube
        </Typography>
      </Box>

      <Box>
        <Paper sx={{ 
            borderRadius: "5px",
            paddingTop: "3px", paddingBottom: "8px",
            display: "flex", alignItems: "center",
            borderRadius: "15px", outline: "0"
            }}
            component="form"
           
        >
          <input placeholder="Search..." className="input-field" />
            
          <SearchIcon sx={{ fontSize: "30px", color: "tomato"}}/>
        </Paper>
        
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }} gap={2} mr="5px">
        <VideocamOutlinedIcon sx={{ color: "#fff", fontSize: "35px"}} />
        <NotificationsNoneOutlinedIcon sx={{ color: "#fff", fontSize: "35px"}} />
        <div className="profile-image">
          Image here
        </div>
      </Box>

    </Stack>
  )
}

export default Navbar
