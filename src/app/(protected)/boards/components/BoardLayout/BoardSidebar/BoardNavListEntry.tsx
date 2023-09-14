import { Box, Typography } from "@mui/material";
import Link from "next/link";

export interface BoardNavListEntryProps {
  title: string;
  linkTo: string;
}

export function BoardNavListEntry({ linkTo, title }: BoardNavListEntryProps) {
  return (
    <Box
      component={Link}
      href={linkTo}
      prefetch
      sx={{
        display: "flex",
        gap: "1rem",
        ".image": {
          width: "1.5rem",
          aspectRatio: "1",
          borderRadius: "8px",
        },
      }}
    >
      <img
        src="https://picsum.photos/500/400"
        alt={`${title} board image`}
        className="image"
      />

      <Typography variant="captionMedium">{title}</Typography>
    </Box>
  );
}
