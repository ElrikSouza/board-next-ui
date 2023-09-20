import { Box, styled } from "@mui/material";

export const BoardColumnGridStyleContainer = styled(Box)({
  height: "100%",
  padding: "1rem",
  display: "grid",
  gridAutoFlow: "column",
  gridAutoColumns: "300px",
  alignItems: "start",
  gap: "1rem",
  overflowX: "auto",
  width: "100%",
  minWidth: "100%",
});
