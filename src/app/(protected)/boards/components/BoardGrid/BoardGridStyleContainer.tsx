"use client";

import { Box, styled } from "@mui/material";

export const BoardGridStyleContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "1rem",
  "--card-ratio": "1.618",
});
