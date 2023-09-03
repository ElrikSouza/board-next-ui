import { ChildrenProps } from "@/app/util.types";
import { Box, Typography } from "@mui/material";

export interface AuthCardProps extends ChildrenProps {
  title: string;
  subtitle: string;
}

export function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "500px",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        background: "#FFF",
        borderRadius: "10px",
        padding: "1rem",
        aspectRatio: "1/1",
        gap: "1.5rem",
      }}
    >
      <Box sx={{ display: "flex", flexFlow: "column", gap: ".25rem" }}>
        <Typography>{title}</Typography>
        <Typography>{subtitle}</Typography>
      </Box>

      <Box>{children}</Box>
    </Box>
  );
}
