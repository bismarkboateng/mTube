import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { categories } from "../utils/constants";



const Sidebar = ({ selectedCategory, setSelectedCategory}) => {
  return (
    <Box minHeight="95vh"
       sx={{ borderRight: "1px solid #e3e3e3",
          height: {xs: "auto", md: "95%"}
       }}
      >
        { categories.map((category, idx) => (
          <button className="sidebar"
              key={idx}
              style={{ background: category.name === selectedCategory && "red"}}
              onClick={() => setSelectedCategory(category.name)}
          >
            <span 
              style={{ 
                  marginRight: "20px", 
                  color: category.name === selectedCategory ? "white" : "red",
              }}
            > { category.icon } </span>
            <span
              style={{ color: "white"}}
            >{ category.name }</span>

          </button>
        ))}
        <Typography color="#fff" fontWeight="bold" p={2}>
          Copyright mtube media 2023
        </Typography>
     </Box>
  )
}

export default Sidebar