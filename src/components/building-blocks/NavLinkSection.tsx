import { ChildrenProps } from "@/app/util.types";
import { Box, Typography } from "@mui/material";

export interface NavLinkSectionProps extends ChildrenProps {
  title: string;
}

export function NavLinkSection({ children, title }: NavLinkSectionProps) {
  return (
    <Box sx={{ display: "flex", flexFlow: "column", gap: "1rem" }}>
      <Typography>{title}</Typography>
      <Box
        component="nav"
        sx={{ display: "flex", flexFlow: "column", gap: ".5rem" }}
      >
        {children}
      </Box>
    </Box>
  );
}
