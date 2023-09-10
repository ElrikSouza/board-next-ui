import { appColors } from "@/app/colors";
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
        borderRadius: "12px",
        padding: "2rem",
        gap: "2rem",
      }}
    >
      <Box sx={{ display: "flex", flexFlow: "column", gap: ".25rem" }}>
        <Typography variant="titleMedium">{title}</Typography>
        <Typography variant="subtitleMedium" color={appColors.textAlt}>
          {subtitle}
        </Typography>
      </Box>

      <Box>{children}</Box>
    </Box>
  );
}
