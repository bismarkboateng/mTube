import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { categories } from "../utils/constants";

const Feed = () => {
  return (
    <Stack direction="row">
      <Box minHeight="95vh"
        sx={{ borderRight: "1px solid #e3e3e3"}}
      >
          { categories.map((category, idx) => (
            <button className="sidebar">
              <span
               style={{ marginRight: "20px", color: "red"}}
              >{ category.icon } </span>
              <span
                style={{ color: "white"}}
              >{ category.name }</span>

            </button>


          ))}

          <Typography color="#fff" fontWeight="bold" p={2}>
            Copyright mtube media 2023
          </Typography>
      </Box>

      <Box>

      </Box>
    </Stack>
  )
}

export default Feed
