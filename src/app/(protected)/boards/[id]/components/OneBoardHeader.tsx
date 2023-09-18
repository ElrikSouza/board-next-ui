import { Box, Typography } from "@mui/material";

export interface OneBoardHeaderProps {
  title: string;
}

export function OneBoardHeader({ title }: OneBoardHeaderProps) {
  return (
    <Box sx={{ display: "flex", padding: "1rem", background: "red" }}>
      <Typography variant="titleSmall">{title}</Typography>
    </Box>
  );
}
