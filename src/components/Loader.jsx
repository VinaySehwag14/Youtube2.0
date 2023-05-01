import React from "react";
import { Box, CircularProgress, Stack } from "@mui/material";

const Loader = () => (
  <Box minHeight="95vh">
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="80vh"
      maxWidth="800px" // adjust this value as needed
      mx="auto" // center horizontally
    >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;
