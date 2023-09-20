import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

export interface EmptyStateMessageProps {
  title: string;
  icon?: ReactNode;
  body?: string;
  callToAction?: ReactNode;
}

export function EmptyStateMessage({
  icon,
  body,
  title,
  callToAction,
}: EmptyStateMessageProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      {!!icon && (
        <Box
          sx={{
            backgroundColor: "red",
            padding: ".5rem",
            display: "grid",
            placeItems: "center",
            borderRadius: "50%",
            alignSelf: "center",
            "& > svg": {
              width: "2rem",
              height: "2rem",
            },
          }}
        >
          {icon}
        </Box>
      )}

      <Box sx={{ display: "flex", flexFlow: "column", alignItems: "center" }}>
        <Typography variant="titleMedium">{title}</Typography>
        {!!body && <Typography variant="body1">{body}</Typography>}
      </Box>

      {callToAction}
    </Box>
  );
}
