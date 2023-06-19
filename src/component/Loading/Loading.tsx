import {Box, CircularProgress, Typography} from "@mui/material";
import React from "react";

function Loading() {
  return (
      <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
          sx={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
          }}
      >
          <CircularProgress />
          <Typography variant="h6" marginTop={2} textAlign={"center"}>
              加载中, 请等待...
          </Typography>
      </Box>
  );
}

export default Loading;