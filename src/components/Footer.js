import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        p: 3,
        textAlign: "center",
        color: "rgba(255,255,255,0.7)",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Utsav Raj. All Rights Reserved.
      </Typography>
    </Box>
  );
}
