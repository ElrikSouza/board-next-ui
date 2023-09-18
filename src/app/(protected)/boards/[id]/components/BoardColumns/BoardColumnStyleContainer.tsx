import { Box, styled } from "@mui/material";

export const BoardColumnStyleContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 320px)",
  gap: "1rem",
});
