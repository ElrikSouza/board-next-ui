import { Box, Typography } from "@mui/material";
import Link from "next/link";

export function BoardHeader() {
  return (
    <Box sx={{ backgroundColor: "purple", padding: "1rem" }}>
      <Typography component={Link} href="/boards" variant="captionMedium">
        Triilo
      </Typography>
    </Box>
  );
}
